describe('verify ' , ()=>{
    it('pass',  ()=>{
        cy.visit('https://muna.mytakbir.com/');
        const userEmail = "deen.sqe3@gmail.com";
        const password = "deenSQE#3";
        const btnSingin = "Sign In"
        cy.contains(btnSingin).click();
        cy.get('#outlined-basic').type(userEmail);
        cy.get('#outlined-adornment-password').type(password);
        cy.get(':nth-child(4) > .Button_ButtonContainer__vbZiS > .MuiButtonBase-root').click()
    })
})