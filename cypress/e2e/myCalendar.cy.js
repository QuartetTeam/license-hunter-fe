describe('내 캘린더가 정상적으로 작동하는지 확인한다.', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.my-calendar-button').click();
    cy.url().should('include', '/myCalendar');
  });

  it('내 캘린더에 정상적으로 접속할 수 있는지 확인한다.', () => {
    cy.url().should('include', '/myCalendar');
  });

  it('캘린더 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/calendars').as('getUserCalendar');
    cy.reload();
    cy.wait('@getUserCalendar').should('exist');
  });

  it('캘린더 알림 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/calendars').as('getUserCalendar');
    cy.reload();
    cy.get('.fc-bellButton-button').click();
    cy.wait('@getUserCalendar').should('exist');
  });
});
