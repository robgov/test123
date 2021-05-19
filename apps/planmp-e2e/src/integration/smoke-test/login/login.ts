/// <reference types="cypress" />
import {
    Before,
    After,
    Given,
    When,
    Then,
  } from "cypress-cucumber-preprocessor/steps";

  
  Given(/^the user navigates to the AE home page$/, function () {
    //expect(1).to.eq(1);
    cy.visit('https://google.ca')
  });
  
  When(/^the user clicks on Sign-In button$/, function () {
    expect(1).to.eq(1);
  });
  
  Then(/^the user should be logged IN successfully$/, function () {
    expect(1).to.eq(1);
  });
  