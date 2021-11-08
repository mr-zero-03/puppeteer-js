const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];

iPhone.viewport.isLandscape = true;

iPhone.viewport.width = 667;
iPhone.viewport.height = 375;


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const H1 = 'h1';

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate( ( H11 ) => {
    return( {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
      title: document.getElementsByTagName( H11 )[0].innerHTML
    } );
  }, H1 );

  console.log('Dimensions:', dimensions);

  await browser.close();
})();
