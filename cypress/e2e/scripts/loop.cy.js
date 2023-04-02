describe('check title and meta tags', () => {
    it('passes', () => {

        //Make a list of organizations 
        const orgList = ["bicny", "mudarib", "alquran-dawah-center"];
        const orgTitles = ["BROOKLYN", "MUDARIB", "QURAN"];

        //Look through a list of Organizations 
        for (let counter = 0; counter < orgList.length; counter++) {
            //Open their donation form 
            cy.visit(`https://give.deenfund.com/${orgList[counter]}`);

            cy.document().then((doc) => {
                const ogTitle = doc.querySelector('meta[property="og:title"]').getAttribute("content");

                expect(ogTitle).to.include(orgTitles[counter]);
            });
            //Verify they have Meta Property: og:title equals to their Org title 
        };
    });
});