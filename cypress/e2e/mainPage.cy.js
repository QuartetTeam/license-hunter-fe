describe('메인페이지가 정상적으로 작동하는지 확인한다.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('메인페이지에 정상적으로 접속할 수 있는지 확인한다.', () => {
    cy.url().should('include', '/');
  });

  it('검색어를 통해 자격증 검색 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/search*').as('getCertSearch');
    cy.get('.searchBox-group__input').type('정보처리기사{enter}');
    cy.wait('@getCertSearch').should('exist');
  });

  it('메인 카테고리 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/category?isDefault=true').as('getCategoryIsTrue');
    cy.wait('@getCategoryIsTrue').should('exist');
  });

  it('더보기 카테고리 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/category?isDefault=false').as('getCategoryIsFalse');
    cy.wait('@getCategoryIsFalse').should('exist');
  });

  it('추천 카테고리 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/recommendation').as('getRecommendCategory');
    cy.wait('@getRecommendCategory').should('exist');
  });

  it('카테고리를 클릭했을 때, 자격증 검색 페이지로 이동하는지 확인한다.', () => {
    cy.get('.favorite-field-button').first().click();
    cy.url().should('include', '/certificateSearch');
  });

  it('추천 카테고리를 클릭했을 때, 자격증 상세 페이지로 이동하는지 확인한다.', () => {
    cy.get('.certificate-info-box').first().click();
    cy.url().should('include', '/certificateDetail');
  });
});
