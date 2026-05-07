import { expect, Page } from '@playwright/test';

export class SauceDemoProdPage {
  constructor(private page: Page) {
  };

  public PRODUCT_NAME = "xpath=//div[text() = 'Sauce Labs Bike Light']";
  public ADD_TO_CART = "xpath=//button[@id='add-to-cart']";
  public CART_ICON = "xpath=//a[@class='shopping_cart_link']";
  


  async productPageIsVisible(): Promise<void> {
    await this.page.url().includes('inventory.html');
}
  async selectProduct(): Promise<void> {
    await this.page.waitForSelector(this.PRODUCT_NAME, { state: 'visible', timeout: 10000 });
    await this.page.locator(this.PRODUCT_NAME).click();
  }     
async clickAddToCartButt(): Promise<void> {
    await this.page.waitForSelector(this.ADD_TO_CART, { state: 'visible', timeout: 20000 });
    await this.page.locator(this.ADD_TO_CART).click();
  } 
  async clickCartIcon(): Promise<void> {
    await this.page.waitForSelector(this.CART_ICON);
    await this.page.locator(this.CART_ICON).click();
    expect(this.page.url()).toContain('cart.html');
  } 

  async prodDetailsPageIsVisible(): Promise<void> {
    await this.page.url().includes('inventory-item.html');
  }

}