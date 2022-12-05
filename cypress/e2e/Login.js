const { When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

When(
  "I click on the {string} {string} element",
  (elementText, elementSelector) => {
    cy.get(`${elementSelector}:visible`)
      .contains(elementText)
      .invoke("removeAttr", "target")
      .click();
  }
);

When(
  "I fill in the {string} input with {string}",
  (elementSelector, inputText) => {
    cy.get(`input[type=${elementSelector}]`).type(inputText);
  }
);

When("I fill in the login form", () => {
  Step(this, `I fill in the "email" input with "testing@email.com"`);
  Step(this, `I fill in the "password" input with "TestingPassword123"`);
});

const testPages = [
  { name: "Cypress home", url: "https://www.cypress.io/" },
  { name: "login", url: "https://cloud.cypress.io/login" },
  { name: "dashboard login", url: "https://cloud.cypress.io/login/email" },
  { name: "email verification", url: "https://cloud.cypress.io/verify" },
];

testPages.forEach((page) => {
  When(`I navigate to the ${page.name} page`, () => {
    cy.visit(page.url);
  });

  Then(`I should be redirected to the ${page.name} page`, () => {
    cy.url().should("eq", page.url);
  });
});
