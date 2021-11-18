Feature: Login Page

  Scenario: Login using valid credentials
    Given I navigate to Login Page
    When I put "standard_user" as a username
      And I put "secret_sauce" as a password
      And I click on login button
    Then I should be on Inventory page
    