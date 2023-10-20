

export default class infomedoPage {
  private _url = 'https://www.grupoinfomed.es/'

  private _inputSearch = '#search_form_input_homepage'
  private _btnSearch = '#search_button_homepage'
  private _resultSearch = '#links'

  load(): void {
    cy.visit(this._url)
    cy.get('body').should('be.visible')
  }

  checkPhoneElement(text: string): void {
    cy.get(this._inputSearch).should('be.visible').type(text)
  }

  checkPhoneNumber(): void {
    cy.get(this._btnSearch).should('be.visible').click()
  }

}
