import { Given,When, Then } from '@cucumber/cucumber';
import { expect,Page } from '@playwright/test';
import { ENV } from '../../../config/env';

Given('I opened amazon website', async function () {
  await this.page.goto(ENV.AMAZON_BASE_URL);
});

Then('I verify update location text', async function () {
  // using page locator
  const text = await this.page.locator("#glow-ingress-line2").textContent();
  console.log(text);

//using page fixture
// console.log(await this.page.textContent("#glow-ingress-line2"));
});

When('I click on Everyday essentials', async function (){
await this.page.locator("//div[@class='nav-div']//a[text()='Everyday Essentials']").click();
  });

Then('I should be able to see Groceries', async function (){
 const text1 =  this.page.locator("//span[text()=' Groceries ']");
 const textValue = await text1.textContent();
 expect(textValue).toContain('Groceries');
  });

When('I click on Groceries', async function (){
await this.page.locator("//span[text()=' Groceries ']").click();
  });

Then('I should be navigated to Grocery page', async function (){
  const text3 = this.page.locator("//h1[text()='Grocery']");
  const textValue1 = await text3.textContent();
  expect(textValue1).toContain('Grocery');
  
});

When('I select the product',async function (){
  await this.page.locator("//div[@data-csa-c-item-id='amzn1.asin.1.B0FKTT9145']").click();
  ;
});

Then('I should be navigated to product details page',async function (){
await expect(this.page).toHaveURL(/\/dp\/B0FKTT9145/);
// expect(this.page).toHaveURL(URL);  
});

When('I click on add to cart button',async function (){
  await this.page.locator("//input[@id='add-to-cart-button']").click();
});

Then('I should be able to see the product in cart', async function (){
  const img = this.page.locator("//div[@data-asin='B0FKTT9145']");
  expect(img).toBeVisible({ timeout: 20000 });
});

Then('I verify the product price is {string}', async function(expectedPrice) {
const actualPrice = await this.page
    .locator("(//span[@class='a-price-whole'])[1]")
    .textContent();
  // console.log("Actual Price: " + actualPrice);
  expect(actualPrice).toContain(expectedPrice);
});

When('I click on Proceed to checkout button', async function() {
await this.page.locator("//input[@name='proceedToRetailCheckout']").click();
})

Then('I should be navigated to sign in page', async function() {
  await expect(this.page).toHaveURL(/\/ap\/signin/);
});
  



  