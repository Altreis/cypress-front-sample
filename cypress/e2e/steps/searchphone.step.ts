import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('Page loaded', function () {
  this.browser.load()
})

Then('I check the phone element exists', function () {
    this.browser.checkPhoneElement()
})

Then('I check the phone number exists', function () {
  this.browser.checkPhoneNumber()
})
