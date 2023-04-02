describe("should open website and find the meta tag", () => {
  it("", () => {
    cy.visit("https://muna.mytakbir.com/");

    const searchText = "MUNA";
    cy.title().should("include", searchText);
  });
});
