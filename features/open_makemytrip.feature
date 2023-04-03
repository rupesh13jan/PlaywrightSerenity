Feature: Open Makemytrip
  As a user
  I want to open Makemytrip
  So that I can book a flight ticket

  Scenario: Open Makemytrip
    Given I am on the Makemytrip homepage
    When I click on the "Flights" tab
    Then I should be on the flight booking page
