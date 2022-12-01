describe('Проверка формы авторизации', function () {

    it('Верный логин/пароль', function () {
       cy.visit('https://gameguru.ru/');
       cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
       cy.get('#login_email').type('верный логин');
       cy.get('#login_password').type('верный пароль');
       cy.get('#auth-sbm').click();
       cy.get('.nav-link > .ava > img').click();
       cy.contains('Личный кабинет');
       cy.get(':nth-child(5) > .user-menu-link').click()
       
    })

    it('Неверный логин/пароль', function () {
        cy.visit('https://gameguru.ru/');
        cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
        cy.get('#login_email').type('неверный логин');
        cy.get('#login_password').type('верный пароль');
        cy.get('#auth-sbm').click();
        cy.contains('Неверный Email или пароль. Внимание, пароль чувствителен к регистру!')
        
     })
    
     it('Верный логин/неверный пароль', function () {
        cy.visit('https://gameguru.ru/');
        cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
        cy.get('#login_email').type('верный логин');
        cy.get('#login_password').type('неверный пароль');
        cy.get('#auth-sbm').click();
        cy.contains('Неверный Email или пароль. Внимание, пароль чувствителен к регистру!')
        
     })  

     it('Неверный логин/неверный пароль', function () {
        cy.visit('https://gameguru.ru/');
        cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
        cy.get('#login_email').type('неверный логин');
        cy.get('#login_password').type('неверный пароль');
        cy.get('#auth-sbm').click();
        cy.contains('Неверный Email или пароль. Внимание, пароль чувствителен к регистру!')
        
     })  
 
     })