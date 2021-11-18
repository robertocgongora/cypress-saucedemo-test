import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^I should be on Inventory page$/, () => {
  cy.get("a.shopping_cart_link").should('be.visible');
})