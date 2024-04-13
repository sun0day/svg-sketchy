import {basename,dirname, isAbsolute, join } from 'node:path';
import {readFile} from 'node:fs/promises';
import {accessSync} from 'node:fs';
import EventEmitter from 'node:events';
import pp, {type CDPSession} from 'puppeteer';
import fg, {isDynamicPattern} from 'fast-glob';

const cwd = process.cwd();
const clientEntry = "svg-sketchy.client/dist/svg-sketchy.iife.js";
const svgExtReg = /\.svg$/;
const extReg = /([^/]+)\.(svg|dot)$/;
const namePattern = '[name]';

export enum FileType {
  SVG = 'svg',
  DOT = 'dot'
}

export enum RunnerEventName {
  DOWNLOAD_START = 'download_start',
  DOWNLOAD_COMPLETED = 'download_completed',
  DOWNLOAD_FAIL = 'download_fail',
}

export interface RunnerEventParams {
  svg: string,
  out: string
}

export class Runner extends EventEmitter {
  private root: string;
  private outputDir: string;
  private outputFileName: string = "[name].svg";
  private inputFiles:string[] = [];
  private outputFiles: string[] = [];
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
      output 
    }: {
      root?: string,
      target?: string,
      output?: string
    } = {}
  ) {
    super();

    this.root = root;
    this.parseOutput(output ?? root);
    this.parseSvgFiles(target);
  }

  private parseOutput(output: string) {
    const absOutput = isAbsolute(output) ? output : join(this.root, output);
    const fileName = basename(absOutput);
    if(extReg.test(fileName)) {
      this.outputDir = dirname(absOutput);
      this.outputFileName = fileName;
    } else {
      this.outputDir = absOutput;
    }
  }

  private parseSvgFiles(target: string)  {
    this.inputFiles = target.split(" ").reduce((files, pattern) => {
      if(isDynamicPattern(pattern)) {
        files.push(...fg.sync(this.resolveAbsPath(pattern), {onlyFiles: true}));
      } else {
        files.push(this.resolveAbsPath(pattern));
      }

      return files; 
    }, [] as string[])
      .filter((file) => {
        if(!extReg.test(file)) {
          return false;
        }

        try {
          accessSync(file);
          return true;
        } catch(_) {
          return false;
        }
      })
      .sort((next, cur) => svgExtReg.test(cur) ? 1 : -1);

    if(this.inputFiles.length < 1) {
      throw new Error(`No .svg, .dot files found!`);
    }    

    this.outputFiles = this.inputFiles.map(filePath => {
      const [,name]  = basename(filePath).match(extReg);
      return this.outputFileName.replace(namePattern, name);
    });
  }

  private resolveAbsPath(path: string) {
    return  (isAbsolute(path) ? path : join(this.root, path)).replace(/\\/g, '/');
  }

  private async computeHtml() {
    const SVG_FILES = [];
    const svgFiles = [];
    const otherFiles = [];
    const svgs = [];
    const others = [];
   
    const [clientJs] = await Promise.all([
      readFile(this.clientPath),

      ...this.inputFiles.map(async (file, index) => {
        let dsl = null;
        let fileType = FileType.SVG;
        const content = await readFile(file);
        const out = this.outputFiles[index];

        if(svgExtReg.test(file)) {
          svgFiles.push(file);
          svgs.push(content);
        } else {
          otherFiles.push(file);
          others.push(content);
          dsl = content.toString();
          fileType = FileType.DOT;
        }

        SVG_FILES.push({ out, dsl, type: fileType });
      })]);

    const scriptOpenTag = 
      Buffer.from("<script>");
    const scriptCloseTag = 
      Buffer.from("</script>");

    const htmlBuf =  Buffer.concat([
      this.htmlHead,
      ...svgs,
      scriptOpenTag,
      Buffer.from(`
        window.SVG_FILES=${JSON.stringify(SVG_FILES)}
      `),
      scriptCloseTag,
      scriptOpenTag,
      clientJs,
      scriptCloseTag,
      Buffer.from("</body></html>")
    ]);

    return htmlBuf;
  }

  private async waitUntilDownload(session: CDPSession) {
    const downloadingSvgs = {};
    session.off("Browser.downloadWillBegin");
    session.off("Browser.downloadProgress");

    return new Promise((resolve) => {
      session.on('Browser.downloadWillBegin', (e)=>{
        this.emit(RunnerEventName.DOWNLOAD_START, e.suggestedFilename);
        downloadingSvgs[e.guid] = e.suggestedFilename;
      });

      session.on('Browser.downloadProgress', e => {
        const isCompleted = e.state === 'completed';
        const isCanceled = e.state === 'canceled'; 

        if(isCompleted || isCanceled) {
          const downloadFileName = downloadingSvgs[e.guid];
          delete downloadingSvgs[e.guid]; 

          if(downloadFileName) {
            const index = this.outputFiles.indexOf(downloadFileName);
            this.emit(
              isCompleted ? RunnerEventName.DOWNLOAD_COMPLETED : RunnerEventName.DOWNLOAD_FAIL, 
              {
                svg: this.inputFiles[index],
                out: join(this.outputDir, downloadFileName)
              } as RunnerEventParams
            );

            if(isCompleted) {
              this.inputFiles.splice(index, 1);
              this.outputFiles.splice(index, 1);
            }
          }
        }

        if(Object.keys(downloadingSvgs).length === 0) {
          resolve(true);
        }
      });
    });
  }

  async run() {
    const browser = await pp.launch({ headless: true });
    const session = await browser.target().createCDPSession();
    await session.send('Browser.setDownloadBehavior', {
      behavior: 'allow',
      downloadPath : this.outputDir, 
      eventsEnabled: true
    });


    while(this.inputFiles.length) {
      const page = await browser.newPage();
      const htmlBuf = await this.computeHtml();
      const navigation = page.setContent(htmlBuf!.toString());
      const downloadProgress = this.waitUntilDownload(session); 

      await navigation;
      await  downloadProgress; 
      page.close();
    } 

    await browser.close();
  }
}
