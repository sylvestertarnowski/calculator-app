describe('My First Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true);
    })
})

describe('Second test', () => {
    it('Visit the app', () => {
        cy.visit('/');

        cy.contains('CA');
    });
});