import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('Page loaded', function () {
  this.browser.load()
})

Then('I check the phone element', function () {
    console.log()
})
