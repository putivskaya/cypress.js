describe('Проверка формы регистрации', function () {

   it('Валидные данные', function () {
      cy.visit('https://gameguru.ru/');
      cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
      cy.get('#enter-form > .modal-body > :nth-child(1) > .change-reg-form').click();
      cy.get('#reg_name').type('имя');
      cy.get('#reg_email').type('валидный емайл');
      cy.get('#reg_password').type('валидный пароль');
      cy.get('#reg-sbm').click();
      cy.contains('Для подтверждения регистрации, пройдите по ссылке')

   })
   
   
   it('Невалидный емайл', function () {
        cy.visit('https://gameguru.ru/');
        cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
        cy.get('#enter-form > .modal-body > :nth-child(1) > .change-reg-form').click();
        cy.get('#reg_name').type('Имя');
        cy.get('#reg_email').type('Невалидный емайл');
        cy.get('#reg_password').type('Валидный пароль');
        cy.get('#reg-sbm').click();
        cy.contains('Некорректный адрес эл.почты')

     })

     it('Пароль менее 8 символов', function () {
        cy.visit('https://gameguru.ru/');
        cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
        cy.get('#enter-form > .modal-body > :nth-child(1) > .change-reg-form').click();
        cy.get('#reg_name').type('Имя');
        cy.get('#reg_email').type('Валидный емайл');
        cy.get('#reg_password').type('пароль из 4 символов');
        cy.get('#reg-sbm').click();
        cy.contains('Введённый пароль слишком короткий. Он должен содержать как минимум 8 символов')


     })

     it('Простой пароль на 8 цифр', function () {
        cy.visit('https://gameguru.ru/');
        cy.get('.navbar-nav-second > .nav-item > .nav-link').click();
        cy.get('#enter-form > .modal-body > :nth-child(1) > .change-reg-form').click();
        cy.get('#reg_name').type('Имя');
        cy.get('#reg_email').type('Валидный емайл');
        cy.get('#reg_password').type('Пароль из 8 цифр подряд');
        cy.get('#reg-sbm').click()
        cy.contains('Введённый пароль слишком широко распространён')


     })

     

    })