@duckduckgo
Feature: Search phone number on the Infomed website

  Background:
    Given I go to the Infomed page

  @smoke
  Scenario: Using the search input with the text "smoke test"
    Given I fill the search input with the "smoke test" term on the Search Engine page
    When I click on the search button on the Search Engine page
    Then the text "What is Smoke Testing?" should be visible on the result page on the Search Engine page
