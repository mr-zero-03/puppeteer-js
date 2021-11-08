const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.stealmylogin.com/demo.html');

  let text = 'input[type="text"]';
  let password = 'input[type="password"]';
  let submit = 'input[type="submit"]';
  await page.type( text, 'username');
  await page.type( password, 'password');
  await page.screenshot({ path: 'form1.jpg' });

  await page.click(submit);

  await page.waitForNavigation();
  await page.screenshot({ path: 'form2.jpg' });

  console.log('New Page URL:', page.url());

  await browser.close();
})();




