describe('verify add to cart', () => {
    it('should add a course to shopping cart', () => {
        //Open the website 
        cy.visit("https://sayhan-hikmahusa.mytakbir.com/");
        //Find "Add to Cart" button 
        //Click "Add to Cart" button

        cy.get(':nth-child(1) > .Session_SessionCard__FbgKS > .Session_SessionCardInfo__oCYxR > .Session_SessionCardFooter__Am3YF > :nth-child(1) > .Button_ButtonContainer__vbZiS > .MuiButtonBase-root').click();
        //Find the Shopping Cart icon 
        //Click the Shopping Cart icon    
        cy.get('.ButtonGroup > .Header_ShoppingNotification__ngO6n > .Button_ButtonContainer__vbZiS > .MuiButtonBase-root').click({force: true});
        //Find the "Checkout" button 
        //Click the "Checkout" button 
        cy.get('.ShoppingSummary_ShoppingSummary__yhUWU > .Button_ButtonContainer__vbZiS > .MuiButtonBase-root').click()
        //Open pop-up modal and fill out form
        //Click "Join for free" button
        cy.get(':nth-child(2) > .TextField > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('mehedi');
        cy.get(':nth-child(3) > .TextField > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('hasan');
        cy.get(':nth-child(4) > .TextField > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('mehedidc360@.com');
        cy.get('.FieldPassword_customInput__QFX3_').type('Mehedi@#')
    
    })
  })
  