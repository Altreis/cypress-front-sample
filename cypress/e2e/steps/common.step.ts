import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import infomedoPage from './src/pages/checkPhoneNumberPage'

Given('I go to the Infomed page', function () {
  this.browser = new infomedoPage()
  this.browser.load()
})
