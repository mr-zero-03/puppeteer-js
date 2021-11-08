const puppeteer = require( 'puppeteer' );

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setRequestInterception( true );
  page.on( 'request', ( interceptedRequest ) => {
    if (
      interceptedRequest.url().endsWith('.png') ||
      interceptedRequest.url().endsWith('.jpg')
    ) {
      interceptedRequest.abort();
      console.log( interceptedRequest.url() );
    } else { interceptedRequest.continue(); }
  });
  await page.goto( 'https://gitlab.com/' );
  await browser.close();
})();
