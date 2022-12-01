describe('Проверка формы поиска', function () {
    it('Поиск перелета из Москвы в Санкт-Петербург', function () {
        cy.visit('https://www.aviasales.ru/');
        cy.get('#origin').type('Москва');
        cy.get('#destination').type('Санкт-Петербург');
        cy.get('.trip-duration__field.--departure > .trip-duration__input-wrapper').click();
        cy.get('[aria-label="Fri Dec 09 2022"] > [data-test-id="tooltip-wrapper"] > .calendar-day > .calendar-day__content > .price_85d2b9c').click();
        cy.get('[aria-label="Sun Dec 25 2022"] > .calendar-day > .calendar-day__date').click();
        cy.get('.avia-form__submit > .button_70e8ad4').click()

     })
     
 })
