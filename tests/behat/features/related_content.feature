Feature: You can get to the site
  As an instructor
  So that I can expand my understanding
  I want to see content related to my current page


Scenario: User can see related online teaching guides from a job aid
  Given I am on "/node/2"
  Then I should see "Related Online Teaching Guides"
