const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on( 'console', ( msg ) => {
    for ( let i = 0; i < msg.args().length; ++i ) {
      console.log( `${i}: ${msg.args()[i]}` );
    }
  } );

  //await page.evaluate( () => { console.log( 'hello', 5, { foo: 'bar' } ); } );

  await page.goto( 'https://google.com' );
  await page.addScriptTag( { path: 'to-inject.js' } );
  /*await page.screenshot({ path: 'google.jpg' });
*/
  await browser.close();
})();
