

export default class infomedoPage {
  private url = 'https://www.grupoinfomed.es/'

  private phoneElement = 'https://www.grupoinfomed.es/wp-content/themes/grupoinfomed/_images/marcalatsup.jpg'

  load(): void {
    cy.visit(this.url)
    cy.get('body').should('be.visible')
  }

  checkPhoneElement(text: string): void {
    cy.get('[src="' + this.phoneElement + '"]')
      .should('exist')
  }

  checkPhoneNumber(): void {
    cy.get('[src="' + this.phoneElement + '"]')
    .should('exist')
  }

}
