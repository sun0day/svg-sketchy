import pp, {type CDPSession} from 'puppeteer'
import {fileURLToPath} from 'node:url';
import {dirname, isAbsolute, join, normalize} from 'node:path'
import fg, {isDynamicPattern} from 'fast-glob'

const cwd = process.cwd()

export class Runner {
  private root: string
  private downloadPath: string
  private svgFiles:string[] = [];
  private htmlPath = join(__dirname  ?? dirname(fileURLToPath(import.meta.url)), 'index.html')

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
const browser = await pp.launch({ headless: true });
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

new Runner() 


