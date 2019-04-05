describe("Verify user should able to Search a keyword cypress framework in google", () => {
    beforeEach(() => {
      cy.fixture("/user_input").as("admin");
    });
    // previous test omitted for brevity
    it("Launch", function() {
        cy.visit(this.admin.url1);    
    
    });

    it('When user should able to enter "Noise Cancellation headphone" in search textbox',function(){
        cy.get('.gLFyf')
        .type(this.admin.searchKeyword1)
        .should("have.value", this.admin.searchKeyword1);
        cy.contains('Google Search').click();

    });

    
});