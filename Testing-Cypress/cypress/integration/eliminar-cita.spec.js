/// <reference types="cypress"  />

describe('prueba la funcionalidad crear una cita y la elimina', ()=> {
    it('edita una cita', ()=> {
        cy.visit('/index.html');

        cy.get('[data-cy=mascota-input]')
        .type('Kira');
        cy.get('[data-cy=propietario-input]')
        .type('Felix Vega');
        cy.get('[data-cy=telefono-input]')
        .type('553453455');
        cy.get('[data-cy=fecha-input]')
        .type('2000-06-20');
        cy.get('[data-cy=hora-input]')
        .type('13:20');
        cy.get('[data-cy=sintomas-textarea]')
        .type('Se rasca mucho');
        cy.get('[data-cy=submit-cita]')
        .click();

        cy.get('[data-cy = "titulo-citas"]')
        .invoke('text')
        .should('equal', 'Administra tus Citas');

        cy.get('[data-cy="alerta"]')
        .invoke("text")
        .should("equal", "Se agregó correctamente");

        cy.get('[data-cy="alerta"]')
        .should("have.class", "alert-success")
    });


    it('Elimina una cita', ()=> {
        cy.get("[data-cy= btn-eliminar").click();

        cy.get('[data-cy = "titulo-citas"]')
        .invoke('text')
        .should('equal', 'No hay Citas, comienza creando una');
    })
    
});