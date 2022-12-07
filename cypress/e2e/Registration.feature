Feature: Registration
  Background:
    When I navigate to the Cypress home page
    And I click on the 'Sign up' 'a' element
    Then I should be redirected to the registration page
    When I click on the 'Sign up' '.btn-provider-email' element
    Then I should be redirected to the dashboard registration page

  Scenario: NEGATIVE CASE: Existing account
    When I fill in the form with existing account credentials
    Then The registration should result in a '401' status code
    And I should see an error message for an existing email address

  Scenario: POSITIVE CASE: Successful registration
    When I fill in the form with random account credentials
    Then The registration should result in a '200' status code
    And I should be redirected to the email verification page
    And The account verification page should display the correct random email