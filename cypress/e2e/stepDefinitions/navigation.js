const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const testPages = [
  { name: "Cypress home", url: "https://www.cypress.io/" },
  { name: "registration", url: "https://cloud.cypress.io/signup" },
  {
    name: "dashboard registration",
    url: "https://cloud.cypress.io/signup/email",
  },
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
