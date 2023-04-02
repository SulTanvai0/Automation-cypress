
describe("Verify dc secure login works", () => {
    it(" it should open a website and verify the link", () => {
  // First open the
  cy.visit("https://deenconnect.io");
  // Find  the text secure login
  cy.contains(" SECURE login").click();
  // open that link
  });
});
