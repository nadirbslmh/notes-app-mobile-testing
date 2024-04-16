Feature: Notes Management
    As a user
    I can manage notes
    So that I can manage notes efficiently

    Background: Home Page
        Given I am on the home page

    Scenario: View all notes
        When I see note data
        Then I can see all notes

    Scenario: Create a new note
        When I tap plus button
        Then I insert note title
        Then I insert note content
        Then I tap create button
        Then new note is created

    Scenario: View note
        When I tap certain note
        Then I can view note title and content