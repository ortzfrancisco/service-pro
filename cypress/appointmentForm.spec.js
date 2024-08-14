describe('Appointment Form', () => {
    it('should submit the form and display the new appointment', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[name="client-name"]').type('Jane Doe');
        cy.get('select[name="service-type"]').select('Oil Change');
        cy.get('input[name="appointment-date"]').type('2024-08-20');
        cy.get('button[type="submit"]').click();
        cy.contains('Jane Doe').should('be.visible');
    });
});
