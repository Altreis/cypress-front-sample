@duckduckgo
Feature: Search phone number on the Infomed website

  Background:
    Given I go to the Infomed page

  @smoke
  Scenario: Check phone element and number
    Then I check the phone element
