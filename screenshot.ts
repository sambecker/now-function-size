import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

const isDev = false;

const LOCAL_CHROME_PATH = process.platform === 'win32'
  ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

export default async () => {
  const type = 'png';

  const puppeteerOptions = isDev
    ? {
        args: [],
        executablePath: LOCAL_CHROME_PATH,
        headless: true
      }
    : {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      };

  const browser = await puppeteer.launch(puppeteerOptions);

  const page = await browser.newPage();
  await page.goto('https://apple.com');
  const file = await page.screenshot({ type });
  await browser.close();

  return file;
}
