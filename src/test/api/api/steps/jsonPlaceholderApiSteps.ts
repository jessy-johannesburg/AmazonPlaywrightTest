import { Given, Then } from '@cucumber/cucumber';
import { expect, request } from "@playwright/test";
import { ENV } from '../../../../config/env';

Given('I send the API request', async function () {
    const apiContext= await request.newContext({baseURL: ENV.JSON_BASE_URL});
    this.response =  await apiContext.get('/posts/1');
    this.statusCode =  this.response.status();
    this.responseBody =  await this.response.json();
})

Then('I should verify status code {int}',async function (int: number) {
 this.statusCode = this.response.status();
 expect(this.statusCode).toBe(int);
})

Then('I should verify the user id', async function () {
  const userId = this.responseBody.userId;
  expect(userId).toBe(1);
  console.log("USERID :", userId);
})

Then('I should verify the title',async function () {
  const title = this.responseBody.title;
  expect(title).toBeDefined();
  console.log("TITLE :", title);
})
    
    
