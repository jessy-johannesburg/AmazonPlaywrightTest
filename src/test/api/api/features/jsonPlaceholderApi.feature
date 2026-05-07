@placeholder

Feature: JSON Placeholder API Testing

  Scenario: Verify user details from JSON Placeholder API
    Given I send the API request 
    Then I should verify status code 200
    And I should verify the user id
    And I should verify the title
  