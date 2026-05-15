import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000); // 60 seconds

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    // attach to world
    this.browser = browser;
    this.page = page;
});

After(async function () {
    await this.page.close();
    await this.browser.close();
});