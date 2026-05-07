import { Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { SauceDemoLoginPage } from "../../../pages/saucedemologinpage";
import { SauceDemoProdPage } from "../../../pages/saucedemoprodpage";
import { SauceDemoCartPage } from "../../../pages/saucedemocartpage";

let loginPage: SauceDemoLoginPage;
let prodPage: SauceDemoProdPage;
let cartPage: SauceDemoCartPage;

Given('I am on the SauceDemo login page', async function () {
  loginPage = new SauceDemoLoginPage(this.page);
  prodPage = new SauceDemoProdPage(this.page);
  cartPage = new SauceDemoCartPage(this.page);
  await this.page.goto('https://www.saucedemo.com/');
})

When('I enter valid username and password', async function (){
    await loginPage.enterCredentials();
})

Then('I should be redirected to the products page', async function () {
  await loginPage.isLoginSuccessful();
})

When('I click on the login button', async function () {
  await loginPage.clickLoginButton(); 
})

When('I select a product from the product list', async function () {
  await prodPage.selectProduct();
})

// Given('I am on the products page', async function () {
//   await prodPage.productPageIsVisible
// })

Then('I click on the cart icon', async function () {
 await prodPage.clickCartIcon();
})

Then('the product should be added to the cart', async function () {
 await cartPage.verifyProdVisibleInCart();
})

Then('verify product details in the cart', async function () {
    await cartPage.verifyProductDetails();
})

When('I click on the Add to Cart button', async function () {
  await prodPage.clickAddToCartButt();
  
})

Then('I should be navigated to the product details page', async function () {
  await prodPage.prodDetailsPageIsVisible();
})

Then('I click on Remove button', async function () {
  await cartPage.clickRemoveButton();
})
