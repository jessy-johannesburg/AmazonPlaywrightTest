import { Given, Then } from '@cucumber/cucumber';
import { expect, request } from '@playwright/test';

Given('I hit the api endpoint', async function () {
  const apiContext = await request.newContext();

  this.response = await apiContext.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  this.statusCode = this.response.status();
  this.responseBody = await this.response.json(); 
});

Then('I should receive a response with status code {int}', async function (status: number) {
  console.log('Actual Status code:', this.statusCode);
  expect(this.statusCode).toBe(status);
});

Then('I should see the user id', async function () {
  const userId = this.responseBody[9].id;
  expect(userId).toBe(10);
  console.log('User ID:', userId);
});

Then('I should see the user email', async function () {
  const userEmail = this.responseBody[9].email;
  expect(userEmail).toBeDefined();
  console.log('User Email:', userEmail);
});

Then('I should see the user name', async function () {
  const userName = this.responseBody[9].name;
  expect(userName).toBeDefined();
  console.log('User Name:', userName);
});

Then('I should see the user address', async function () {
  const userAddress = this.responseBody[9].address;
  expect(userAddress).toBeDefined();
  console.log('User Address:', userAddress);
});