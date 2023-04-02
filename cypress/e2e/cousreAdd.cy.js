describe("create a new course", () => {
  it("open website create new course", () => {
    cy.visit(`https://sayhan-admin.mytakbir.com/`);
    //login to website as a admin
    //type email
    cy.get("#outlined-basic").type("toseefdc360@gmail.com");
    //type password
    cy.get("#outlined-adornment-password").type("zYTFs7rIV3B4umE");

    // sing in
    cy.get(":nth-child(4) > .ButtonContainer > .MuiButtonBase-root").click();

    //new course button
    cy.wait(5000).get('a[href="add-courses/0"]').click()

    //course title 
    cy.wait(5000).get('a[href="add-courses/0"]').click()
    
  });
});
