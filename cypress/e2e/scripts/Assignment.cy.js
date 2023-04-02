
describe("Verify dc secure login works", () => {
    it("it should open a website and verify the link", () => {
      //Open https://muslimcal.com/
      cy.visit("https://muslimcal.com/");
  
      //Find name element
      cy.get("#name").type("Mehedi Hasan");
  
      //Find email element
      cy.get("#email").type("Mehedidc360@gmail.com");
  
      //Find subject element
      //Input subject text: Welcome to cypress automation testing
      cy.get("#subject").type("Welcome to cypress automation testing");
  
      //Type message: cypress is an automation tool used to write automation test scripts
      cy.get('#message').type("Cypress is an automation tool used to write automation test scripts");
      
      //Find submit element and click “Submit”
      cy.get("#submit").click()

      cy.url().should('include' , 'thank-you.html');
    });
  });
