import {basename, isAbsolute, join} from 'node:path';
import {readFile} from 'node:fs/promises';
import EventEmitter from 'node:events'
import pp, {type CDPSession} from 'puppeteer';
import fg, {isDynamicPattern} from 'fast-glob';

const cwd = process.cwd();
const clientEntry = "svg-sketchy.client/dist/svg-sketchy.iife.js";
const svgReg = /\.svg$/g;
const svgSketExt = ".sket.svg"

export enum RunnerEventName {
  DOWNLOAD_START = 'download_start',
  DOWNLOAD_COMPLETED = 'download_completed',
  DOWNLOAD_FAIL = 'download_fail',
}

export class Runner extends EventEmitter {
  private root: string;
  private downloadPath: string;
  private svgFiles:string[] = [];
  private clientPath: string = require?.resolve ? require.resolve(clientEntry) : import.meta.resolve(clientEntry);
  private htmlHead = Buffer.from(`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Svg Sketchy </title>
  </head>
  <body>`);

  constructor(
    {
      root = cwd,
      target = "*.svg",
      downloadPath = cwd 
    }: {
      root?: string,
      target?: string,
      downloadPath?: string
    } = {}
  ) {
    super()
    this.root = root;
    this.downloadPath = downloadPath;
    this.parseSvgFiles(target);
  }


  private parseSvgFiles(target: string)  {
    this.svgFiles = target.split(" ").reduce((files, pattern) => {
      if(isDynamicPattern(pattern)) {
        files.push(...fg.sync(this.resolveAbsPath(pattern), {onlyFiles: true}));
      } else {
        files.push(this.resolveAbsPath(pattern));
      }
      return files; 
    }, [] as string[]);

    if(this.svgFiles.length < 1) {
      throw new Error(`No svg files found!`)
    }    
  }

  private resolveAbsPath(path: string) {
    return isAbsolute(path) ? path : join(this.root, path);
  }

  private async computeHtml() {
    const [clientJs, ...svgs] = await Promise.all([readFile(this.clientPath), ...this.svgFiles.map(file => readFile(file))]);
    const scriptOpenTag = 
      Buffer.from("<script>");
    const scriptCloseTag = 
      Buffer.from("</script>");

    const htmlBuf =  Buffer.concat([
      this.htmlHead,
      ...svgs,
      scriptOpenTag,
      Buffer.from("window.SVG_FILES=[" + this.svgFiles.map(file => 
        `"${basename(file).replace(svgReg, svgSketExt)}"`) + "]"),
      scriptCloseTag,
      scriptOpenTag,
      clientJs,
      scriptCloseTag,
      Buffer.from("</body></html>")
    ]);
    return htmlBuf;
  }

  private async waitUntilDownload(session: CDPSession) {
    const downloadingSvgs = {}
    return new Promise((resolve) => {
      session.on('Browser.downloadWillBegin', (e)=>{
        this.emit(RunnerEventName.DOWNLOAD_START, e.suggestedFilename)
        downloadingSvgs[e.guid] = e.suggestedFilename
      });
      session.on('Browser.downloadProgress', e => {
        const isCompleted = e.state === 'completed'
        const isCanceled = e.state === 'canceled' 
        if(isCompleted || isCanceled) {
          const downloadFileName = downloadingSvgs[e.guid].suggestedFilename
          delete downloadingSvgs[e.guid] 
          this.emit(isCompleted ? RunnerEventName.DOWNLOAD_COMPLETED : RunnerEventName.DOWNLOAD_FAIL, downloadFileName)
        }
        if(Object.keys(downloadingSvgs).length === 0) {
          resolve(true);
        }
      });
    });
  }

  async run() {
    const [browser, htmlBuf] = await Promise.all([pp.launch({ headless: true }), this.computeHtml()]);
    const session = await browser.target().createCDPSession();

    await session.send('Browser.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath: this.downloadPath, 
      eventsEnabled: true
    });

    const page = await browser.newPage();
    const navigation = page.setContent(htmlBuf!.toString());
    const downloadProgress = this.waitUntilDownload(session); 

    await navigation;
    await downloadProgress; 

    await browser.close();
  }
}

new Runner().run();


