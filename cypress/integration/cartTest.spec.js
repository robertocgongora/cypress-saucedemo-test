describe('Cart Page', () => {
  it('Verify that harvester is working as expected', () => {
    cy.visit('/');
    cy.get('input#user-name').type('standard_user');
    cy.get('input#password').type('secret_sauce');
    cy.get('input#login-button').click();
    cy.get('div#shopping_cart_container').should('be.visible');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('a.shopping_cart_link').click();
    cy.get('.cart_list .cart_item')
      .scrapeElements({
      elementsToScrape: [
        { label: 'product_quantity', locator: '.cart_quantity' },
        { label: 'product_label', locator: '.cart_item_label a .inventory_item_name' },
      ],
    })
    .then((scrapedData) => {
      expect(scrapedData.data).to.deep.eq([
        {
          product_quantity: '1',
          product_label: 'Sauce Labs Backpack',
        },
        {
          product_quantity: '1',
          product_label: 'Sauce Labs Bike Light',
        },
      ]);
    });
  });
});