const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];

iPhone.viewport.isLandscape = true;
iPhone.viewport.width = 667;
iPhone.viewport.height = 375;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.google.com');
  await page.screenshot({ path: 'google-iphone6-land.jpg' });

  await browser.close();
})();
