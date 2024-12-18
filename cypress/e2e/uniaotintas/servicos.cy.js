/// <reference types="Cypress"/>


describe('No site União Tintas, Identifique os Componentes em Serviços.', () => {
    it('Apenas Leie porque não tem Nada', () => {
        cy.visit("https://uniaotintas.com.br/servicos/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Serviços')
        cy.get('.conteudo > ul > :nth-child(1)').should('contain', 'Entrega grátis:')
        cy.get('.conteudo > ul > :nth-child(2)').should('contain', 'Sistema Tintométrico:')
        cy.get('.conteudo > ul > :nth-child(3)').should('contain', 'Espectrofotômetro:')
        cy.get('.conteudo > ul > :nth-child(4)').should('contain', 'Acerto de cores:')
        cy.get('.conteudo > ul > :nth-child(5)').should('contain', 'Estacionamento:')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')      
    });
});