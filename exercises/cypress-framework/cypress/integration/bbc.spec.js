describe("BBC test", () => {
    beforeEach(() => {
        cy.visit("https://www.bbc.co.uk/");
    })

    it("go to the news page", () => {
        cy.get('.css-4wew9k-MastheadText').should("have.text","Welcome to the BBC");
        cy.get('.css-1j2epfn-NavigationLink').click({ force: true })
        cy.get('#brand > span.gs-u-vh').should("have.text","BBC News")
    });

    it("go to the sport page", () => {
        cy.get('.css-4wew9k-MastheadText').should("have.text","Welcome to the BBC");
        cy.get('.css-w14lwg-NavigationLink').click({ force: true }) 
        cy.get('.sp-c-global-header__logo').should("have.text","BBCSport")
    })

    it("has link back to the homepage", () => {
        cy.get('.css-1ssvzom-NavigationLink').should("have.text","Home");
        cy.get('.css-1ssvzom-NavigationLink').click({ force: true });
        cy.get('.css-4wew9k-MastheadText').should("have.text","Welcome to the BBC");
    })

    it("go to the weather page", () => {
        cy.get('.css-zq9bvs-NavigationLink').should("have.text","Weather");
        cy.get('.css-zq9bvs-NavigationLink').click({ force: true });
        cy.get('.wr-c-uk-text-summary__title').should("have.text","UK Summary")
    })
});