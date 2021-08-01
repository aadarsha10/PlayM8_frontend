Feature: Owner registration

Scenario: Owner registration
Given Test owner register
Then click register button


Given I visit owner register page
When I provide owner details to register
Then I should click register button