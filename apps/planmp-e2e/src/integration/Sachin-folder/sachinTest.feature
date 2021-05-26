Feature: Sachin functionality

  Scenario: Login
    Given the user navigates to the banking app home page
    When the user verify the title of the page
    When the user clicks on Sign-In button
    When the user clicks on Add Customer button and enter information in all fields
    Then the user should be logged IN successfully
