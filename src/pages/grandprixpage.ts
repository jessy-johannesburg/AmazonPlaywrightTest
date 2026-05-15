import { expect, Page } from '@playwright/test';

export class GrandPrixPage {
  constructor(private page: Page) {
  }

  public FORMULA_1 = "xpath =//span[@class='ssrcss-1u47p8g-LinkTextContainer eis6szr1'and text()='Formula 1']";
  public RESULTS = "xpath =//span[@class='ssrcss-1mstwv3-LinkTextContainer eis6szr1'and text()='Results']";
  public YEAR = "xpath =//div[text()='2023']";
  public FIRST_POSITION = "xpath =(//table[@aria-label='Race result']//td[.//span[contains(@class, 'FullName') and text()='Max Verstappen']])[1]";
  public SECOND_POSITION = "xpath =(//table[@aria-label='Race result']//td[.//span[contains(@class, 'FullName') and text()='Charles Leclerc']])[1]";
  public THIRD_POSITION = "xpath =(//table[@aria-label='Race result']//td[.//span[contains(@class, 'FullName') and text()='George Russell']])[1]";
  public SPORT_HEADING = "xpath =//div[@class='ssrcss-kpltdl-LogoWrapper esbu9dd5']";
  public SEARCH_BOX = "xpath =//span[text()='Search BBC']";
  public SEARCH_INPUT = "id=searchInput";
  public SEARCH_BUTT = "id=searchButton";
  public SERACH_RESULTS = "xpath=(//li[.//div[@data-testid='default-promo']]//a[contains(@class, 'PromoLink')][contains(., 'sport') and contains(., '2023')])[position() <= 4]"

  async sportHeadingIsVisible(): Promise<void> {
    await this.page.waitForSelector(this.SPORT_HEADING, { state: 'visible', timeout: 10000 });
    const isVisible = await this.page.locator(this.SPORT_HEADING).isVisible();
    expect(isVisible).toBeTruthy();
  }

  async isNavigatedToFormula1(): Promise<void> {
    const url = this.page.url();
    expect(url).toContain('formula1');
    await console.log(`Successfully navigated to formula1 page: ${url}`);
  }

  async clickFormula1(): Promise<void> {
    await this.page.locator(this.FORMULA_1).click();

  }

  async clickResults(): Promise<void> {
    await this.page.locator(this.RESULTS).click();
  }

  async isNavigatedToResults(): Promise<void> {
    const url = this.page.url();
    expect(url).toContain('results');
    await console.log(`Successfully navigated to formula1 page: ${url}`);
  }

  async selectYear(): Promise<void> {
    await this.page.waitForSelector(this.YEAR, { state: 'visible', timeout: 10000 });
    await this.page.locator(this.YEAR).click();
  }


  async firstPositionIsVisible(): Promise<void> {

    await this.page.waitForSelector(this.FIRST_POSITION, { state: 'visible', timeout: 20000 });
    const text = await this.page.locator(this.FIRST_POSITION).innerText();
    expect(text).toBeTruthy();
    console.log('First Racer is:', text);


  }

  async secondPositionIsVisible(): Promise<void> {
    await this.page.waitForSelector(this.SECOND_POSITION, { state: 'visible', timeout: 20000 });
    const text = await this.page.locator(this.SECOND_POSITION).innerText();
    expect(text).toBeTruthy();
    console.log('Second Racer is:', text);

  }

  async thirdPositionIsVisible(): Promise<void> {
    await this.page.waitForSelector(this.SECOND_POSITION, { state: 'visible', timeout: 20000 });
    const text = await this.page.locator(this.THIRD_POSITION).innerText();
    expect(text).toBeTruthy();
    console.log('Third Racer is:', text);
  }

  async clickSearchIcon(): Promise<void> {
    await this.page.locator(this.SEARCH_BOX).click();
  }

  async verifySearchInputBoxIsVisible(): Promise<void> {
    const isVisible = await this.page.locator(this.SEARCH_INPUT).isVisible();
    expect(isVisible).toBeTruthy();
  }

  async enterTxt(text: string): Promise<void> {
    const input = await this.page.locator(this.SEARCH_INPUT);
    await input.fill(text);
    console.log('Info', `Entered text successfully: ${text}`);
  }

  async submitSearch(): Promise<void> {
    await this.page.waitForSelector(this.SEARCH_BUTT, { state: 'visible', timeout: 5000 });
    await this.page.locator(this.SEARCH_BUTT).click();
  }

  async getRelevantSearches(): Promise<void> {

    await this.page.waitForSelector(this.SERACH_RESULTS, { state: 'visible', timeout: 5000 });

    const searchResults = this.page.locator(this.SERACH_RESULTS);
    const count = await searchResults.count();

    // Loop through top 4 or fewer
    for (let i = 0; i < Math.min(4, count); i++) {
      const text = await searchResults.nth(i).innerText();
      console.log(`Relevant Search ${i + 1}: ${text}`);

    }
  }
}