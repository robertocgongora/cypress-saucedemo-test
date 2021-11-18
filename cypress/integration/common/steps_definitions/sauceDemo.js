import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given(/^I navigate to Login Page$/, () => {
  cy.visit("/");
})

When(/^I put "([^"]*)" as a username$/, (userName) => {
  cy.get("#user-name").type(userName);
})

When(/^I put "([^"]*)" as a password$/, (passUser) => {
  cy.get("#password").type(passUser);
})

When(/^I click on login button$/, () => {
  cy.get("#login-button").click();
})