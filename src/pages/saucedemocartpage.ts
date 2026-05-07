import { expect, Page } from '@playwright/test';

export class SauceDemoCartPage {
  constructor(private page: Page) {
  };

    public PRODUCT_NAME = "xpath=//div[@class='inventory_item_name']";
    public PRODUCT_PRICE = "xpath=//div[@class='inventory_item_price']";
    public PRODUCT_QTY = "xpath=//div[@class='cart_quantity']";
    public REMOVE_BUTTON = "xpath=//button[@id='remove-sauce-labs-bike-light']";


    async verifyProdVisibleInCart(): Promise<void> {
      await this.page.waitForSelector(this.PRODUCT_NAME, { state: 'visible', timeout: 20000 });
      const productName = await this.page.locator(this.PRODUCT_NAME).innerText();
      expect(productName).toBeTruthy();
    }

    async verifyProductDetails(): Promise<void> {
      await this.page.waitForSelector(this.PRODUCT_NAME, { state: 'visible', timeout: 20000 });
      const productName = await this.page.locator(this.PRODUCT_NAME).innerText();
      const productPrice = await this.page.locator(this.PRODUCT_PRICE).innerText();
      const productQty = await this.page.locator(this.PRODUCT_QTY).innerText();
      expect(productName).toBeTruthy();
      expect(productPrice).toBeTruthy();
      expect(productQty).toBeTruthy();  
    }

    async clickRemoveButton(): Promise<void> {
      await this.page.waitForSelector(this.REMOVE_BUTTON, { state: 'visible', timeout: 20000 });
      await this.page.locator(this.REMOVE_BUTTON).click();
    }


}