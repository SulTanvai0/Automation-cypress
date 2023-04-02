describe("should open website and find the meta tag", () => {
  it("", () => {
    cy.visit("https://give.deenfund.com/mudarib");

    cy.document().then((doc) => {
      const ogTitle = doc
        .querySelector('meta[property="og:title"]')
        .getAttribute("content");
    //   expect(ogTitle).to.equal("MUDARIB FOUNDATION INC.");
      expect(ogTitle).to.include("BROOKLYN");
    });
  });
});
