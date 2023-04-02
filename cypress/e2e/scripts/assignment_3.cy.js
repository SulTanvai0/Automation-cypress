describe("verify user can enroll into free course", () => {
  it("should enroll into a free course", () => {
    //Open the website
    cy.visit("https://muna.mytakbir.com/");
    //Log in as student
    const userEmail = "deen.sqe3@gmail.com";
    const password = "deenSQE#3";
    const btnSingIn = "Sign In";
    const enrollForFree = "Enroll for Free";
    const continueButton = "Continue";
    cy.contains(btnSingIn).click();

    //Fill out the form
    cy.get("#outlined-basic").type(userEmail);
    cy.get("#outlined-adornment-password").type(password);
    cy.get(":nth-child(4) > .Button_ButtonContainer__vbZiS > .MuiButtonBase-root").click();

    //Find and click Enroll for Free button
    cy.get(".Session_SessionCardFooter__Am3YF > :nth-child(1) > .Button_ButtonContainer__vbZiS > .MuiButtonBase-root").click({ force: true });

    //Find Continue button and click
    cy.wait(2000).get(".Dialog_DialogButton__3OpQq > .MuiButtonBase-root").click();

    const courseName = "Saheeh Quran Taleem Course";
    //Verify user is enrolled into course
    cy.contains(courseName);
  });
});
