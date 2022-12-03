describe('Проверка кнопок в личном кабинете', function () {

    it('Кнопки в личном кабинете', function () {
       cy.visit('https://gameguru.ru/');
       cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
       cy.get('#login_email').type('Верный логин');
       cy.get('#login_password').type('Верный пароль');
       cy.get('#auth-sbm').click();
       cy.get('.nav-link > .ava > img').click();
       cy.get(':nth-child(1) > .user-menu-link').click();
       cy.contains('Личный кабинет');
       cy.get('.nav > :nth-child(4) > .nav-link').click();
       cy.contains('Полученные');
       cy.get(':nth-child(2) > b').click();
       cy.contains('Гордон Фримен');
       cy.get(':nth-child(7) > .nav-link').click();
       cy.contains('Вы получили достижение');
       cy.get(':nth-child(8) > .nav-link').click();
       cy.contains('Вы открыли');
       cy.get('.d-md-block > .d-none > .btn').click();
       cy.contains('Теги');
       cy.get('.breadcrumb > :nth-child(2) > a > span').click();
       cy.contains('Личный кабинет');
       cy.get('#search-by-name').type('Pavel');
       cy.get('#btn-search').click();
       cy.contains('У вас нет') 

    
       
    }) 



     })