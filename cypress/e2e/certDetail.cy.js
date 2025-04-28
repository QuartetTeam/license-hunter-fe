describe('자격증 상세 페이지가 정상적으로 작동하는지 확인한다.', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.certificate-info-box').first().click();
    cy.url().should('include', '/certificateDetail');
  });

  it('자격증 상세 페이지에 정상적으로 접속할 수 있는지 확인한다.', () => {
    cy.url().should('include', '/certificateDetail');
  });

  it('자격증 상세 정보 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/*').as('getCertDetail');
    cy.reload();
    cy.wait('@getCertDetail').should('exist');
  });

  // it('접수 바로가기 클릭했을때 정상적으로 자격증 신청 홈페이지로 이동하는지 확인한다.', () => {
  //   cy.contains('a', '접수 바로가기').click();
  //   cy.origin('https://www.hrdkorea.or.kr', () => {
  //     cy.url().should('include', 'hrdkorea.or.kr');
  //     cy.get('h1').should('contain', '한국산업인력공단');
  //   });
  // });

  it('메일링 서비스를 정상적으로 구독할 수 있는지 확인한다.', () => {
    cy.intercept('POST', '/api/certifications/*/mailings').as('AddUserMailing');
    cy.contains('button', '메일링 서비스 구독').click();
    cy.contains('button', '네, 구독할게요!').click();
    cy.wait('@AddUserMailing').should('exist');
  });

  it('내 캘린더에 정상적으로 추가할 수 있는지 확인한다.', () => {
    cy.intercept('POST', '/api/certifications/*/calendars').as('AddUserCalendar');
    cy.contains('button', '캘린더 추가').click();
    cy.contains('button', '네, 추가할게요!').click();
    cy.wait('@AddUserCalendar').should('exist');
  });
});
