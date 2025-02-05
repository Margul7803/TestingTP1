describe('template spec', () => {
  it('add multiple task', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#taskInput').clear('T');
    cy.get('#taskInput').type('Tache1');
    cy.get('button').click();
    cy.get('#taskList > :nth-child(1) span').should('have.text', 'Tache1');
    cy.get('#taskInput').clear('T');
    cy.get('#taskInput').type('Tache2');
    cy.get('[onclick="addTask()"]').click();
    cy.get('#taskList > :nth-child(2) span').should('have.text', 'Tache2');
    cy.get('#taskInput').clear('T');
    cy.get('#taskInput').type('Tache3');
    cy.get('[onclick="addTask()"]').click();
    cy.get('#taskList > :nth-child(3) span').should('have.text', 'Tache3');
    cy.get('#taskList > :nth-child(2) > button').click();
    cy.get(':nth-child(1) > button').click();
    cy.get('.task-item > button').click();
    cy.get('#taskInput').clear('F');
    cy.get('#taskInput').type('F5 Tache test');
    cy.get('button').click();
    cy.get('body').click();
    cy.visit('http://localhost:3000');
    /* ==== End Cypress Studio ==== */
  })

  it('add multiple task Exo3', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/index_exercice 3');
    cy.get('#taskInput').clear('T');
    cy.get('#taskInput').type('Tache1');
    cy.get('button').click();
    cy.get('#taskList > :nth-child(1) span').should('have.text', 'Tache1');
    cy.get('#taskInput').clear('T');
    cy.get('#taskInput').type('Tache2');
    cy.get('[onclick="addTask()"]').click();
    cy.get('#taskList > :nth-child(2) span').should('have.text', 'Tache2');
    cy.get('#taskInput').clear('T');
    cy.get('#taskInput').type('Tache3');
    cy.get('[onclick="addTask()"]').click();
    cy.get('#taskList > :nth-child(3) span').should('have.text', 'Tache3');
    cy.get('#taskList > :nth-child(2) > button').click();
    cy.get(':nth-child(1) > button').click();
    cy.get('.task-item > button').click();
    cy.get('#taskInput').clear('F');
    cy.get('#taskInput').type('F5 Tache test');
    cy.get('button').click();
    cy.get('body').click();
    cy.visit('http://localhost:3000/index_exercice 3');
    /* ==== End Cypress Studio ==== */
  })
})