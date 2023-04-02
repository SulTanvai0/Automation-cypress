describe("sample test ", () => {
  it("", () => {
    cy.visit("https://give.deenfund.com/bicny");
    /* Find the meta tag and verify some text*/
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });
});
