/// <reference types="Cypress"/>


describe('No site União Tintas, Identifique os Componentes em Produtos.', () => {
    it('Apenas Identificação', () => {
        cy.visit("uniaotintas.com.br/produtos/")
        cy.get('.content-2 > .navegacao > ul > :nth-child(1) > a').should('contain', 'Home')
        cy.get('.content-2 > .navegacao > ul > :nth-child(2) > a').should('contain', 'Empresa')
        cy.get('.content-2 > .navegacao > ul > :nth-child(3) > a').should('contain', 'Produtos')
        cy.get('.content-2 > .navegacao > ul > :nth-child(4) > a').should('contain', 'Serviços')
        cy.get('.content-2 > .navegacao > ul > :nth-child(5) > a').should('contain', 'Contato')
        cy.get('.tit').should('contain', 'Catálogo de Produtos')
        cy.get('.internas > .navegacao > :nth-child(1) > :nth-child(1) > a').should('contain', 'Dicas de Pintura')
        cy.get('.internas > .navegacao > :nth-child(1) > :nth-child(1) > a').click()
        cy.visit("uniaotintas.com.br/produtos/")
        cy.get('.catalogo > [href="#"]').trigger('mouseover');
        cy.get('.internas > .navegacao > :nth-child(1) > :nth-child(3) > a').click()
        cy.get('.casa > h2').should('contain', 'Entre sem bater!')
        cy.get('.casa > p').should('contain', 'Segmentamos nosso catálogo')
    });

    it('Mapa de Casa: Complemento', () => {
        cy.visit("uniaotintas.com.br/produtos/")
        cy.get('.complementos').click()
        cy.get('.internas > h2').should('contain', 'Produtos > Complementos')
        cy.get('ul > :nth-child(1) > img').trigger('mouseover');
        cy.get(':nth-child(1) > h3').should('contain', 'Massa Acrílica')
        cy.get('ul > :nth-child(2) > img').trigger('mouseover');
        cy.get(':nth-child(2) > h3').should('contain', 'Massa Corrida')
        cy.get('ul > :nth-child(3) > img').trigger('mouseover');
        cy.get(':nth-child(3) > h3').should('contain', 'Brilho para Tinta')
        cy.get('ul > :nth-child(4) > img').trigger('mouseover');
        cy.get(':nth-child(4) > h3').should('contain', 'Selador Acrílico')
        cy.get('ul > :nth-child(5) > img').trigger('mouseover');
        cy.get(':nth-child(5) > h3').should('contain', 'FUNDO PREPARADOR')
        cy.visit("uniaotintas.com.br/produtos/")
    });

    it('Mapa de Casa: Parede', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.paredes').click()
        cy.get('.internas > h2').should('contain', 'Produtos > Paredes')
        cy.get('ul > :nth-child(1) > img').trigger('mouseover');
        cy.get(':nth-child(1) > h3').should('contain', 'NOVACOR EXTRA')
        cy.get('ul > :nth-child(2) > img').trigger('mouseover');
        cy.get(':nth-child(2) > h3').should('contain', 'DIRETO NO GESSO')
        cy.get('ul > :nth-child(3) > img').trigger('mouseover');
        cy.get(':nth-child(3) > h3').should('contain', 'ISABELA PROFISSIONAL')
        cy.get('ul > :nth-child(4) > img').trigger('mouseover');
        cy.get(':nth-child(4) > h3').should('contain', 'ACRÍLICO TOTAL')
        cy.get('ul > :nth-child(5) > img').trigger('mouseover');
        cy.get(':nth-child(5) > h3').should('contain', 'GEL PARA TEXTURAS')
        cy.get('ul > :nth-child(6) > img').trigger('mouseover');
        cy.get(':nth-child(6) > h3').should('contain', 'EFEITO MÁRMORE')
        cy.get('ul > :nth-child(7) > img').trigger('mouseover');
        cy.get(':nth-child(7) > h3').should('contain', 'DECORA SEDA')
        cy.get('ul > :nth-child(8) > img').trigger('mouseover');
        cy.get(':nth-child(8) > h3').should('contain', 'DECORA MATTE')
        cy.get('ul > :nth-child(9) > img').trigger('mouseover');
        cy.get(':nth-child(9) > h3').should('contain', 'EFEITO METALIZADO')
        cy.get('ul > :nth-child(10) > img').trigger('mouseover');
        cy.get(':nth-child(10) > h3').should('contain', 'DECORA EFEITOS ESPECIAIS')
        cy.get('ul > :nth-child(11) > img').trigger('mouseover');
        cy.get(':nth-child(11) > h3').should('contain', 'BRILHO PERFEITO')
        cy.get('ul > :nth-child(12) > img').trigger('mouseover');
        cy.get(':nth-child(12) > h3').should('contain', 'FOSCO COMPLETO')
        cy.get('ul > :nth-child(13) > img').trigger('mouseover');
        cy.get(':nth-child(13) > h3').should('contain', 'CHEGA DE MOFO')
        cy.get('ul > :nth-child(14) > img').trigger('mouseover');
        cy.get(':nth-child(14) > h3').should('contain', 'TEXTURA RÚSTICA')
        cy.get('ul > :nth-child(15) > img').trigger('mouseover');
        cy.get(':nth-child(15) > h3').should('contain', 'GEL DE EFEITOS')
        cy.get('ul > :nth-child(16) > img').trigger('mouseover');
        cy.get(':nth-child(16) > h3').should('contain', 'DECORA DIAMANTE')
        cy.get('ul > :nth-child(17) > img').trigger('mouseover');
        cy.get(':nth-child(17) > h3').should('contain', 'HIDROCOLOR')
        cy.get('ul > :nth-child(18) > img').trigger('mouseover');
        cy.get(':nth-child(18) > h3').should('contain', 'IMPERALL PREMIUM')
        cy.get('ul > :nth-child(19) > img').trigger('mouseover');
        cy.get(':nth-child(19) > h3').should('contain', 'TEXTURA ACRÍLICO')
        cy.get('ul > :nth-child(20) > img').trigger('mouseover');
        cy.get(':nth-child(20) > h3').should('contain', 'ALESSI PISO PREMIUM')
        cy.get('ul > :nth-child(21) > img').trigger('mouseover');
        cy.get(':nth-child(21) > h3').should('contain', 'KEM TONE ACRÍLICA')
        cy.get('ul > :nth-child(22) > img').trigger('mouseover');
        cy.get(':nth-child(22) > h3').should('contain', '3 EM 1')
        cy.get('ul > :nth-child(23) > img').trigger('mouseover');
        cy.get(':nth-child(23) > h3').should('contain', 'COMPLEMENTOS E IMPERMEABILIZANTE')
        cy.get('ul > :nth-child(24) > img').trigger('mouseover');
        cy.get(':nth-child(24) > h3').should('contain', 'LÁTEX PREMIUM')
        cy.get('ul > :nth-child(25) > img').trigger('mouseover');
        cy.get(':nth-child(25) > h3').should('contain', 'SUPER LAVÁVEL')
        cy.get('ul > :nth-child(26) > img').trigger('mouseover');
        cy.get(':nth-child(26) > h3').should('contain', 'GRAFIATOS E TEXTURAS')
        cy.get('ul > :nth-child(27) > img').trigger('mouseover');
        cy.get(':nth-child(27) > h3').should('contain', 'LONGA DURAÇÃO')
        cy.get('ul > :nth-child(28) > img').trigger('mouseover');
        cy.get(':nth-child(28) > h3').should('contain', 'RENDE MUITO')
        cy.get('ul > :nth-child(29) > img').trigger('mouseover');
        cy.get(':nth-child(29) > h3').should('contain', 'EFEITO CAMURÇA')
        cy.get('ul > :nth-child(30) > img').trigger('mouseover');
        cy.get(':nth-child(30) > h3').should('contain', 'LITORAL SEM CHEIRO')
        cy.get('ul > :nth-child(31) > img').trigger('mouseover');
        cy.get(':nth-child(31) > h3').should('contain', 'PROTEÇÃO SOL E CHUVA')
        cy.visit("https://uniaotintas.com.br/produtos/")
    });

    it('Mapa de Casa: Pisos', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.pisos').click()
        cy.get('.internas > h2').should('contain', 'Produtos > Pisos')
        cy.get('ul > :nth-child(1) > img').trigger("mouseover");
        cy.get(':nth-child(1) > h3').should('contain', 'Suvinil Telhas, Pedras e Tijolos')
        cy.get('ul > :nth-child(2) > img').trigger("mouseover");
        cy.get(':nth-child(2) > h3').should('contain', 'Fundo para Pisos Multiuso')
        cy.get('ul > :nth-child(3) > img').trigger("mouseover");
        cy.get(':nth-child(3) > h3').should('contain', 'Novacor Piso Ultra')
        cy.get('ul > :nth-child(4) > img').trigger("mouseover");
        cy.get(':nth-child(4) > h3').should('contain', 'Metalatex Eco Resina Impermeabilizante')
        cy.get('ul > :nth-child(5) > img').trigger("mouseover");
        cy.get(':nth-child(5) > h3').should('contain', 'Novacor Epóxi')
        cy.get('ul > :nth-child(6) > img').trigger("mouseover");
        cy.get(':nth-child(6) > h3').should('contain', 'Novacor Piso Mais Resistente')
        cy.get('ul > :nth-child(7) > img').trigger("mouseover");
        cy.get(':nth-child(7) > h3').should('contain', 'PISO PREMIUM')
        cy.get('ul > :nth-child(8) > img').trigger("mouseover");
        cy.get(':nth-child(8) > h3').should('contain', 'Novacor Resina Impermeabilizante')
        cy.get('ul > :nth-child(9) > img').trigger("mouseover");
        cy.get(':nth-child(9) > h3').should('contain', 'Fuseprotec')
        cy.get('ul > :nth-child(10) > img').trigger("mouseover");
        cy.get(':nth-child(10) > h3').should('contain', 'RESINA ACRÍLICA BASE ÁGUA')
        cy.get('ul > :nth-child(11) > img').trigger("mouseover");
        cy.get(':nth-child(11) > h3').should('contain', 'RESINA ACRÍLICA BASE SOLVENTE')
    });

    it('Mapa de Casa: Metais', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.metais').click()
        cy.get('ul > p').should('contain', 'Nenhum produto encontrado.')
    });

    it('Mapa de Casa: Madeiras', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.madeiras').click()
        cy.get('.internas > h2').should('contain', 'Produtos > Madeiras')
        cy.get('ul > :nth-child(1) > img').trigger("mouseover");
        cy.get(':nth-child(1) > h3').should('contain', 'SUVINIL MARÍTIMO')
        cy.get('ul > :nth-child(2) > img').trigger("mouseover");
        cy.get(':nth-child(2) > h3').should('contain', 'MONTANA OSMOCOLOR SEMITRANSPARENTE')
        cy.get('ul > :nth-child(3) > img').trigger("mouseover");
        cy.get(':nth-child(3) > h3').should('contain', 'CETOL DECK')
        cy.get('ul > :nth-child(4) > img').trigger("mouseover");
        cy.get(':nth-child(4) > h3').should('contain', 'CORALIT BALANCE')
        cy.get('ul > :nth-child(6) > img').trigger("mouseover");
        cy.get(':nth-child(6) > h3').should('contain', 'CETOL')
        cy.get('ul > :nth-child(7) > img').trigger("mouseover");
        cy.get(':nth-child(7) > h3').should('contain', 'CORALIT ULTRA RESISTÊNCIA')
        cy.get('ul > :nth-child(8) > img').trigger("mouseover");
        cy.get(':nth-child(8) > h3').should('contain', 'MONTANA CORES SÓLIDAS')
        cy.get('ul > :nth-child(9) > img').trigger("mouseover");
        cy.get(':nth-child(9) > h3').should('contain', 'CETOL BASE ÁGUA')
        cy.get('ul > :nth-child(10) > img').trigger("mouseover");
        cy.get(':nth-child(10) > h3').should('contain', 'FUNDO PREPARADOR CORALIT BALANCE')
        cy.get('ul > :nth-child(11) > img').trigger("mouseover");
        cy.get(':nth-child(11) > h3').should('contain', 'MONTANA ISOLARE')
        cy.get('ul > :nth-child(12) > img').trigger("mouseover");
        cy.get(':nth-child(12) > h3').should('contain', 'CETOL DECK ANTIADERENTE')
        cy.get('ul > :nth-child(13) > img').trigger("mouseover");
        cy.get(':nth-child(13) > h3').should('contain', 'EMBELEZA CERÂMICA')
        cy.get('ul > :nth-child(14) > img').trigger("mouseover");
        cy.get(':nth-child(14) > h3').should('contain', 'VERNIZ MARÍTIMO')
        cy.get('ul > :nth-child(15) > img').trigger("mouseover");
        cy.get(':nth-child(15) > h3').should('contain', 'Metalatex Esmalte Sintético')
        cy.get('ul > :nth-child(16) > img').trigger("mouseover");
        cy.get(':nth-child(16) > h3').should('contain', 'ESMALTE SINTÉTICO SECAGEM RÁPIDA')
        cy.get('ul > :nth-child(17) > img').trigger("mouseover");
        cy.get(':nth-child(17) > h3').should('contain', 'MONTANA STRIPTIZI GEL')
        cy.get('ul > :nth-child(18) > img').trigger("mouseover");
        cy.get(':nth-child(18) > h3').should('contain', 'FERROLACK')
        cy.get('ul > :nth-child(19) > img').trigger("mouseover");
        cy.get(':nth-child(19) > h3').should('contain', 'SELADORA EXTRA')
        cy.get('ul > :nth-child(20) > img').trigger("mouseover");
        cy.get(':nth-child(20) > h3').should('contain', 'WANDEPOXI')
        cy.get('ul > :nth-child(21) > img').trigger("mouseover");
        cy.get(':nth-child(21) > h3').should('contain', 'IMPREGNANTE PREMIUM')
        cy.get('ul > :nth-child(22) > img').trigger("mouseover");
        cy.get(':nth-child(22) > h3').should('contain', 'WANDEPOXI BASE DE ÁGUA')
        cy.get('ul > :nth-child(23) > img').trigger("mouseover");
        cy.get(':nth-child(23) > h3').should('contain', 'VERNIZ RESTAURADOR')
        cy.get('ul > :nth-child(24) > img').trigger("mouseover");
        cy.get(':nth-child(24) > h3').should('contain', 'TINTA A ÓLEO')
        cy.get('ul > :nth-child(25) > img').trigger("mouseover");
        cy.get(':nth-child(25) > h3').should('contain', 'SATAIN IMPREGNANT')
        cy.get('ul > :nth-child(26) > img').trigger("mouseover");
        cy.get(':nth-child(26) > h3').should('contain', 'CORALIT SECAGEM RÁPIDA')
    });

    it('Mapa de Casa: Solventes', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.solventes').click()
        cy.get('ul > p').should('contain', 'Nenhum produto encontrado.')
    });

    it('Mapa de Casa: Superfícies', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.superficies').click()
        cy.get('ul > p').should('contain', 'Nenhum produto encontrado.')
    });

    it('Mapa de Casa: Acessórios', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.acessorios').click()
        cy.get('.internas > h2').should('contain', 'Produtos > Acessórios')
        cy.get('ul > :nth-child(1) > img').trigger("mouseover")
        cy.get(':nth-child(1) > h3').should('contain', 'TIGRE')
        cy.get('ul > :nth-child(2) > img').trigger("mouseover")
        cy.get(':nth-child(2) > h3').should('contain', 'Atlas')
        cy.get('ul > :nth-child(3) > img').trigger("mouseover")
        cy.get(':nth-child(3) > h3').should('contain', 'COLORGIN')
        cy.get('ul > :nth-child(4) > img').trigger("mouseover")
        cy.get(':nth-child(4) > h3').should('contain', 'MAZA')
    });

    it('Mapa de Casa: Automotivos', () => {
        cy.visit("https://uniaotintas.com.br/produtos/")
        cy.get('.automotivos').click()
        cy.get('.internas > h2').should('contain', 'Produtos > Automotivos')
        cy.get('ul > :nth-child(1) > img').trigger("mouseover")
        cy.get(':nth-child(1) > h3').should('contain', 'Anjo Automotiva')
        cy.get('ul > :nth-child(2) > img').trigger("mouseover")
        cy.get(':nth-child(2) > h3').should('contain', 'Sherwin-Auto')
        cy.get('.email').should('contain', 'contato@uniaotintas.com.br')  
    });

});