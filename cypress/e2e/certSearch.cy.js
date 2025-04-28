describe('자격증 검색 페이지가 정상적으로 작동하는지 확인한다.', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.favorite-field-button').first().click();
    cy.url().should('include', '/certificateSearch');
  });

  it('자격증 검색 페이지에 정상적으로 접속할 수 있는지 확인한다.', () => {
    cy.url().should('include', '/certificateSearch');
  });

  it('자격증 부카테고리 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/category*').as('getSubCategory');
    cy.reload();
    cy.wait('@getSubCategory').should('exist');
  });

  it('자격증 부카테고리를 통해 자격증 검색 조회 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications?categoryId=*').as('getCertSearchBySubCategory');
    cy.get('.cert-tag').eq(1).click();
    cy.wait('@getCertSearchBySubCategory').should('exist');
  });

  it('검색어를 통해 자격증 검색 API가 정상적으로 호출되는지 확인한다.', () => {
    cy.intercept('GET', '/api/certifications/search?name=*').as('getCertSearchBySearchWord');
    cy.get('.searchBox-group__input').type('정보처리기사{enter}');
    cy.wait('@getCertSearchBySearchWord').should('exist');
  });

  it('조회된 자격증을 클릭했을 때, 자격증 상세 페이지로 이동하는지 확인한다.', () => {
    cy.get('.certificate-info-box').first().click();
    cy.url().should('include', '/certificateDetail');
  });
});
