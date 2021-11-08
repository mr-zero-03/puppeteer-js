const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?client=ubuntu&channel=fs&q=hello+world%21&ie=utf-8&oe=utf-8', {
    waitUntil: 'networkidle2',
  });

  await page.type('input[type="text"]', 'Hello World!', { delay: 100 }); // Types slower, like a user
  await page.pdf({ path: 'google.pdf', format: 'letter' });

  await page.click('input.gNO89b');
  await page.waitForNavigation();
  await page.pdf({ path: 'google-search.pdf', format: 'letter' });


  await browser.close();
})();
