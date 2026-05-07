import { expect, Page } from '@playwright/test';

export class SauceDemoLoginPage {
  constructor(private page: Page) {
  };

    public USERNAME = "id=user-name";
    public PASSWORD = "id=password";
    public LOGIN_BUTTON = "xpath=//input[@id = 'login-button']";
    public TXT_MSG = "xpath= //div[text() = 'Swag Labs']"

    async enterCredentials(): Promise<void> {
      await this.page.fill(this.USERNAME, 'standard_user');
      await this.page.fill(this.PASSWORD, 'secret_sauce');
    };

    async clickLoginButton(): Promise<void> {
        await this.page.click(this.LOGIN_BUTTON); 
        expect(this.page.url()).toContain('inventory.html');  
    };

    async isLoginSuccessful(): Promise<void> {
      await this.page.waitForSelector(this.TXT_MSG, { state: 'visible', timeout: 30000 });
      const text = await this.page.locator(this.TXT_MSG).innerText();   
        expect(text).toBeTruthy();
    };

}