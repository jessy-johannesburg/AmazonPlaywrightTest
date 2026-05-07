@saucedemo
Feature: SauceDemo Login and Product Tests

  Scenario: Verify successful login with valid credentials
   Given I am on the SauceDemo login page
    When I enter valid username and password
    And I click on the login button
    Then I should be redirected to the products page
    When I select a product from the product list
    Then I should be navigated to the product details page
    And I click on the Add to Cart button
    Then I click on the cart icon
    Then the product should be added to the cart
    And verify product details in the cart
    And I click on Remove button