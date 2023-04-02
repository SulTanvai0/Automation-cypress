describe('check title and meta tags', () => {
    it('passes', () => {

        //Make a list of organizations 
        const orgList = [ "bicny", "mudarib", "alquran-dawah-center", "masjid-umme-hani", "theabrar"];
        const orgTitles = ["BICNY", "MUDARIB", "ALQURAN", "MASJID", "THEABRAR"];

        //Look through a list of Organizations 
        for (let i = 0; i < orgList.length; i++) {
            //Open their donation form 
            
            cy.visit(`https://give.deenfund.com/${orgList[i]}`);
            
            // Check fr the Keywords orgTitles[i];
            cy.title().should('include',  orgTitles[i])

        };
    });
});