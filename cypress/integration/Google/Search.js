/// <reference types="cypress" />

it('study_test', function () {

cy.visit('https://www.google.ru/')
cy.get('.gLFyf').type('learning cypres{enter}')
cy.get('.MUFPAc > :nth-child(2) > a').click()

})