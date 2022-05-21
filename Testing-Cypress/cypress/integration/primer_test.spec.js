/// <reference types="cypress"  />

describe('Carga la pagina principal', ()=> {
    it('Carga la pagina principal', ()=> {
        cy.visit('/index.html');
        cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
        cy.get('[data-cy = "titulo-proyecto"]').should('exist');
    })

    it("Comprobar que existe el titulo de las citas y su contenido", () => { 
        cy.get('[data-cy = "titulo-citas"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')
    })

    it("Comprobar que el titulo de citas no sea diferente al establecido", () => { 
        cy.get('[data-cy = "titulo-citas"]')
            .invoke('text')
            .should('not.equal', 'Picapiedras')
    })
})