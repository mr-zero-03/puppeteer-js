const puppeteer = require('puppeteer');
const slow3G = puppeteer.networkConditions['Fast 3G'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulateNetworkConditions(slow3G);
  await page.goto('https://www.google.com');
  console.log('Dimensions:', slow3G);

  await browser.close();
})();
