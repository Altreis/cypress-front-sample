

export default class infomedoPage {
  private url = 'https://www.grupoinfomed.es/'

  private phoneElement = 'https://www.grupoinfomed.es/wp-content/themes/grupoinfomed/_images/marcalatsup.jpg'
  private phoneNumber = '902104422'

  load(): void {
    cy.visit(this.url)
      .get('body')
      .should('be.visible')
  }

  checkPhoneElement(): void {
    cy.get('[src="' + this.phoneElement + '"]')
      .should('exist')
  }

  checkPhoneNumber(): void {
    cy.get('a[href="tel:' + this.phoneNumber + '"]')
      .should('exist')
  }

}
