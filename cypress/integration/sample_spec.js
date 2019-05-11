describe('Second test', () => {
    it('Visit the app', () => {
        cy.visit('/');

        cy.contains('CA').click();
        cy.contains('1').click();
        cy.contains('2').click();
    });
});

describe('Operators behaviour', () => {
    it('Click multiple operators in a row', () => {
        cy.contains('5').click();
        cy.contains('/').click();
        cy.contains('1').click();
        cy.contains('/').click();
        cy.contains('+').click();
        cy.contains('=').click();
        cy.contains('=').click();
        cy.contains('=').click();
    })
})

describe('Minus behaviour', () => {
    it('Checks if minus behaves properly', () => {
        cy.contains('-').click();
        cy.contains('-').click();
        cy.contains('=').click();
        cy.contains('6').click();
        cy.contains('6').click();
        cy.contains('-').click();
        cy.contains('=').click();
    })
})

describe('Dot in front', () => {
    it('Check if dot can appear in front without a number first', () => {
        cy.contains('CA').click();
        cy.get('#\\.').click();
        cy.get('.display').should('not.contain', '.');
    })
})

describe('Dot in the middle', () => {
    it('Check if dot can be in the number multiple times', () => {
        cy.contains('CA').click();
        cy.get('#6').click();
        cy.get('#\\.').click();
        cy.get('#6').click();
        cy.get('#\\.').click();
        cy.get('.display').should('contain', '6.6');
    })
})