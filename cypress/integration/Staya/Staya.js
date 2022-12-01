describe('Проверка формы логин/пароль', function () {
    it('Правильный логин/пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('jaijen@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Vdjsabtsofjdnsv');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
        cy.get('button.profile__aside--link').click();
        cy.get('.box__button_ok').click()

     })
     it('Верный логин/ неверный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('jaijen@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Vdjsabtsofj45dnsv');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными')
     })
 
 })
