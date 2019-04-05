describe("Verify user can able to purchase Noiseless Headphones", () => {
    beforeEach(() => {
      cy.fixture("/user_input").as("admin");
    });
    // previous test omitted for brevity
    it("Launch", function() {
        cy.visit(this.admin.url);    
    
    });

    it('When user should able to enter "Noise Cancellation headphone" in search textbox',function(){
        cy
        .get('#inputValEnter')
        .type(this.admin.searchKeyword)
        .should("have.value", this.admin.searchKeyword);
        cy.get('.searchTextSpan').click();

    });

    it('User should verify the search landing page',function(){
        cy.get('#searchMessageContainer > .search-result-txt-section > span').invoke('text')
        .should('contain', this.admin.searchResult_text);
    });
});