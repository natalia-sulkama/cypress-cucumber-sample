Feature: cypress.io
  Scenario: Logging in to the Cypress dashboard
    When I navigate to the Cypress home page
    And I click on the 'Login' 'a' element
    Then I should be redirected to the login page
    When I click on the 'Log in' '.btn-provider-email' element
    Then I should be redirected to the dashboard login page
    When I fill in the login form
    And I click on the 'Log In' 'button' element
    Then I should be redirected to the email verification page
  