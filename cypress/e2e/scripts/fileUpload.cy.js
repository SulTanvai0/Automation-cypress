describe('upload', ()=>{

    it('upload' ,()=>{
        //visit the website 
        cy.visit(`https://muslimcal.com/upload.html`);
        
        
        //select the image file 
        cy.get('#file').selectFile('favicon.png')

        //upload the select the file 
        cy.get('[type="submit"]').click();

    });
});