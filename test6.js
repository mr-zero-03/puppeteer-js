const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com/', {waitUntil: 'networkidle2'});

  await page.evaluate( () => { window.open( 'https://gitlab.com/' ); } );
  const newWindowTarget = await browser.waitForTarget(
    ( target ) => { ( target.url() === 'https://about.gitlab.com/' ) }
  );

  await page.pdf({ path: 'gitlab2.pdf', format: 'letter' });

//  console.log( browser.targets()[4].page() );

  await browser.close();
})();
