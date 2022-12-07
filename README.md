## Cypress Cucumber sample test
A sample automated test using Cypress and Cucumber.

This test covers the following scenarios:
1. **Registration.feature**
  - Unsuccessfully registering with an existing email address
  - Successfully registering with a randomly-generated email address
2. **Login.feature**
  - Unsuccessfully logging in with invalid credentials
  - Successfully logging in with an existing (unverified) account

### Installation & how to run

- Clone the repository to a folder of your choosing.
- Run `npm install`.
- Run tests with `npx cypress open`.
