import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import infomedoPage from './src/pages/checkPhoneNumberPage'

Given('I go to the Infomed page', function () {
  this.browser = new infomedoPage()
  this.browser.load()
})

Given('I fill the search input with the {string} term on the Search Engine page', function (text: string) {
  this.browser.fillSearch(text)
})

When('I click on the search button on the Search Engine page', function () {
  this.browser.search()
})

Then('the text {string} should be visible on the result page on the Search Engine page', function (text: string) {
  this.browser.resultText((elemText: string) => {
    expect(elemText).contains(text)
  })
})
