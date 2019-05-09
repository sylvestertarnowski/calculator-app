describe('Second test', () => {
    it('Visit the app', () => {
        cy.visit('/');

        cy.contains('CA').click();
        cy.contains('1').click();
        cy.contains('2')
    });
});

describe('My First Test', function() {
    it('Does not do much!', function() {
        expect(true).to.equal(true);
    })
})

describe('Operators behaviour', () => {
    it('Click multiple operators in a row', () => {
        cy.contains('5').click();
        cy.contains('/').click();
        cy.contains('1').click();
        cy.contains('/').click();
        cy.contains('+').click();

    })
})