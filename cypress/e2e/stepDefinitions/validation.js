const { Then, Step } = require("@badeball/cypress-cucumber-preprocessor");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Then(
  "The registration should result in a {string} status code",
  (expectedStatusCode) => {
    cy.intercept("https://authenticate.cypress.io/login/local-register*").as(
      "registration"
    );
    Step(this, `I click on the "Sign Up" "button" element`);
    cy.wait("@registration")
      .its("response.statusCode")
      .should("eq", parseInt(expectedStatusCode));
  }
);

Then(
  "Logging in should result in a {string} status code",
  (expectedStatusCode) => {
    cy.intercept("https://authenticate.cypress.io/login/local*").as("login");
    Step(this, `I click on the "Log In" "button" element`);
    cy.wait("@login")
      .its("response.statusCode")
      .should("eq", parseInt(expectedStatusCode));
  }
);

const errorMessages = [
  {
    type: "an existing email address",
    message: "That email address is already taken",
  },
  {
    type: "invalid credentials",
    message: "Incorrect email address or password",
  },
];

errorMessages.forEach((error) => {
  Then(`I should see an error message for ${error.type}`, () => {
    cy.get(".error-message").contains(error.message).should("be.visible");
  });
});
