//import {chromium, firefox, webkit} from 'playwright'
//
//async function launchBrowser() {
//  const browser = await [firefox, webkit].reduce((promise, instance) => {
//    return promise.catch(() => instance.launch())
//  }, chromium.launch())
//
//  if(!browser) {
//    throw new Error("unable to launch chromium, firefox or webkit, please make sure you have install one of them!!")
//  }
//  
//  return browser
//}
//
//(async () => {
//  const browser = await launchBrowser(); 
//  const page = await browser.newPage();
//  const downloadPromise = page.waitForEvent('download');
//  await page.goto('http://localhost:5174');
//  const download = await downloadPromise;
//  console.log(download.path())
//  // other actions...
//  await browser.close();
//})();
import pp, {type CDPSession} from 'puppeteer'

let downloadCount = 0

async function waitUntilDownload(session: CDPSession, fileName = '') {
    return new Promise((resolve, reject) => {
                      session.on('Browser.downloadWillBegin', ()=>{
              downloadCount ++  
            });
        session.on('Browser.downloadProgress', e => { // or 'Browser.downloadProgress'
            if (e.state === 'completed' || e.state === 'canceled') {
              downloadCount--
            }
            if(downloadCount === 0) {
              resolve(true)
            }
        });
    });
}

(async () => {
  const browser = await pp.launch({ headless: true });
  const session = await browser.target().createCDPSession()

  await session.send('Browser.setDownloadBehavior', {
       behavior: 'allow',
       downloadPath: process.cwd(),
       eventsEnabled: true
   });

  const page = await browser.newPage();
  const navigation = page.goto('http://localhost:5174');

  const downloadProgress = waitUntilDownload(session) 

   await navigation
   console.log('ddddddd')
    
  await downloadProgress 

   console.log('xxxxxxx')

   await browser.close()
})()
