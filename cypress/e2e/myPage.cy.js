describe('마이페이지가 정상적으로 작동하는지 확인한다.', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.myPage-button').click();
    cy.url().should('include', '/myPage');
  });

  it('마이페이지에 정상적으로 접속할 수 있는지 확인한다.', () => {
    cy.url().should('include', '/myPage');
  });

  it('메인 카테고리 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/category?isDefault=true').as('getCategoryIsTrue');
    cy.reload();
    cy.wait('@getCategoryIsTrue').should('exist');
  });

  it('더보기 카테고리 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/category?isDefault=false').as('getCategoryIsFalse');
    cy.reload();
    cy.wait('@getCategoryIsFalse').should('exist');
  });

  it('메일링 서비스 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/mailings?page=0&pageSize=2').as('getUserMailing');
    cy.reload();
    cy.wait('@getUserMailing').should('exist');
  });

  it('사용자 이름 변경 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('PATCH', '/api/members/me/profile/nickname').as('changeUserNick');
    cy.get('[data-cy="changeUserNick"]').click();
    cy.wait('@changeUserNick').should('exist');
  });

  it('이메일 변경 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('PATCH', '/api/members/me/profile/email').as('changeUserEmail');
    cy.get('[data-cy="changeUserEmail"]').click();
    cy.wait('@changeUserEmail').should('exist');
  });

  it('관심분야 수정 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('PATCH', '/api/members/me/profile/interests').as('changeUserInterest');
    cy.contains('button', '수정').click();
    cy.contains('button', '완료').click();
    cy.wait('@changeUserInterest').should('exist');
  });

  it('메일린 서비스 삭제 API가 정상적으로 호출되는지 확인한다.', () => {
    // 추후 테스트 코드 재작성 예정
    // cy.intercept('DELETE', '/api/mailings').as('deleteUserMailing');
    // cy.get('[data-cy="deleteUserMailing"]').click();
    // cy.wait('@deleteUserMailing').should('exist');
  });

  it('메일린 활성화/비활성화 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('PATCH', '/api/members/me/settings/mailing-status').as('changeMailingStatus');
    cy.get('[data-cy="changeMailingStatus"]').click();
    cy.wait('@changeMailingStatus').should('exist');
  });

  it('계정 탈퇴 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('DELETE', '/api/members/me/settings/delete-account').as('deleteAccount');
    cy.get('.delete-account__button').click();
    cy.get('.confirmButton').click();
    cy.wait('@deleteAccount').should('exist');
  });
});
