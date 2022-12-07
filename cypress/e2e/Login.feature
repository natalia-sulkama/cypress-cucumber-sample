Feature: Login
  Background:
    When I navigate to the Cypress home page
    And I click on the 'Login' 'a' element
    Then I should be redirected to the login page
    When I click on the 'Log in' '.btn-provider-email' element
    Then I should be redirected to the dashboard login page
  
  Scenario: NEGATIVE CASE: Invalid credentials
    When I fill in the form with invalid account credentials
    Then Logging in should result in a '401' status code
    And I should see an error message for invalid credentials

  Scenario: POSITIVE CASE: Valid credentials, unverified account
    When I fill in the form with existing account credentials
    And I click on the 'Log In' 'button' element
    Then Logging in should result in a '200' status code
    And I should be redirected to the email verification page
    And The account verification page should display the correct existing email 