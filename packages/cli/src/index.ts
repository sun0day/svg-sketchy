import pp, {type CDPSession} from 'puppeteer'
import {fileURLToPath} from 'node:url';
import {basename, dirname, isAbsolute, join, normalize} from 'node:path'
import {readFile, writeFile} from 'node:fs/promises'
import fg, {isDynamicPattern} from 'fast-glob'

const cwd = process.cwd()
const clientEntry = "svg-sketchy.client/dist/svg-sketchy.iife.js"
const svgReg = /\.svg$/g

export class Runner {
  private root: string
  private downloadPath: string
  private svgFiles:string[] = [];
  private clientPath: string = require?.resolve ? require.resolve(clientEntry) : import.meta.resolve(clientEntry)
  private htmlPath = join(__dirname  ?? dirname(fileURLToPath(import.meta.url)), 'index.html')
  private htmlHead = Buffer.from(`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Svg Sketchy </title>
  </head>
  <body>`)

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
    this.root = root
    this.downloadPath = downloadPath
    this.parseSvgFiles(target)
  }


  private parseSvgFiles(target: string)  {
    this.svgFiles = target.split(" ").reduce((files, pattern) => {
      if(isDynamicPattern(pattern)) {
        files.push(...fg.sync(this.resolveAbsPath(pattern), {onlyFiles: true}))
      } else {
        files.push(this.resolveAbsPath(pattern))
      }
      return files 
    }, [] as string[])
    
  }

  private resolveAbsPath(path: string) {
    return isAbsolute(path) ? path : join(this.root, path)
  }

  private slashPath(path: string) {
    return normalize(path).replace(/\\/g, '/')
  }

  private getFileProtocol(path: string) {
    return 'file://' + this.slashPath(path)
  }

  private async writeHtml() {
    const [clientJs, ...svgs] = await Promise.all([readFile(this.clientPath), ...this.svgFiles.map(file => readFile(file))])
    const scriptOpenTag = 
      Buffer.from("<script>")
    const scriptCloseTag = 
      Buffer.from("</script>")

   const htmlBuf =  Buffer.concat([
      this.htmlHead,
      ...svgs,
      scriptOpenTag,
      Buffer.from("window.SVG_FILES=[" + this.svgFiles.map(file => 
                                                           `"${basename(file).replace(svgReg, '.sketch.svg')}"`) + "]"),
      scriptCloseTag,
      scriptOpenTag,
      clientJs,
      scriptCloseTag,
      Buffer.from("</body></html>")
    ])

    return writeFile(this.htmlPath, htmlBuf)
  }

 private async waitUntilDownload(session: CDPSession) {
    let downloadCount = 0
    return new Promise((resolve, reject) => {
                      session.on('Browser.downloadWillBegin', ()=>{
              downloadCount ++  
            });
        session.on('Browser.downloadProgress', e => { 
            if (e.state === 'completed' || e.state === 'canceled') {
              downloadCount--
            }
            if(downloadCount === 0) {
              resolve(true)
            }
        });
    });
}

  async run() {
const [browser] = await Promise.all([pp.launch({ headless: true }), this.writeHtml()]);
  const session = await browser.target().createCDPSession()

  await session.send('Browser.setDownloadBehavior', {
       behavior: 'allow',
       downloadPath: this.downloadPath, 
       eventsEnabled: true
   });

  const page = await browser.newPage();
  const navigation = page.goto(this.getFileProtocol(this.htmlPath));
  const downloadProgress = this.waitUntilDownload(session) 

   await navigation
  await downloadProgress 

   await browser.close()

}
}

new Runner().run()


