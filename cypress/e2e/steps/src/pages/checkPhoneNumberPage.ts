

export default class infomedoPage {
  private contactElements = require('../../../../fixtures/contactElements.json')
  private env = require('../../../../env/env.json')

  private url = this.env.mainPage

  private phoneElement = this.contactElements.phoneElement
  private phoneNumber = this.contactElements.phoneNumber

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
