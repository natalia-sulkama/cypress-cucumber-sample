const { Then, When, Step } = require("@badeball/cypress-cucumber-preprocessor");
import { nanoid } from "nanoid";

When(
  "I click on the {string} {string} element",
  (elementText, elementSelector) => {
    cy.get(`${elementSelector}:visible`)
      .contains(elementText)
      .invoke("removeAttr", "target")
      .click({ force: true });
  }
);

When(
  "I fill in the {string} input with {string}",
  (elementSelector, inputText) => {
    cy.get(`input[type=${elementSelector}]`).clear().type(inputText);
  }
);

const randomString = nanoid().toLowerCase();
const credentialTypes = [
  {
    type: "existing",
    email: "testing@email.com",
    password: "TestingPassword123",
  },
  {
    type: "invalid",
    email: "thisemaildoesnotexist@email.com",
    password: "thiswontwork",
  },
  {
    type: "random",
    email: randomString + "@email.com",
    password: randomString,
  },
];

credentialTypes.forEach((credentials) => {
  When(
    `I fill in the form with ${credentials.type} account credentials`,
    () => {
      Step(this, `I fill in the "email" input with "${credentials.email}"`);
      Step(
        this,
        `I fill in the "password" input with "${credentials.password}"`
      );
    }
  );

  Then(
    `The account verification page should display the correct ${credentials.type} email`,
    () => {
      cy.get(".verify-page-inner > p")
        .first()
        .should("contain", credentials.email);
    }
  );
});
