/// <reference types="cypress" />
const data = require("../../../fixtures/example.json");
import { injectAxe } from '../../../support/app.po';
import {
  Before,
  After,
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

Given(/^we want a simple pass$/, function() {
  expect(1).to.eq(1);
  cy.visit('https://d32p9z2hls3mtn.cloudfront.net');
  cy.wait(2000);
  cy.get('[data-cy="username"]').type(data.cssUserName);
  cy.wait(2000);
  cy.get('[data-cy="password"]').type(data.cssPassword);
  cy.wait(2000);
  cy.get(".goa-button").click();
  cy.wait(15000);
  cy.get(".goa-button")
    .contains("Create New")
    .click();
  cy.wait(2000);
 // cy.injectAxe();
injectAxe()
  //1. Check all Accessibility Failures on the Page
 // cy.checkA11y();

  //2. Exclude Specific Accessibility Element on the page
  //cy.checkA11y({exclude:['.upload-button']  });

  //3. Check only Specific Accessibility Element on the page
  //cy.checkA11y('.upload-button');

  //4. Disable Accessibility Rules
  /* cy.checkA11y(null!, {
    rules: {
      "aria-required-children": { enabled: false },
      "landmark-no-duplicate-banner": { enabled: false },
    },
  });
 */

  //5. Check only include rules with serious and critical impacts. Note** Use Exclamation mark after null in below syntax
   cy.checkA11y(null!, {
    includedImpacts: ["critical", "serious"]
  });
 
});

When(/^we are testing cicd$/, function() {
  expect(1).to.eq(1);

  //cy.get('[data-cy="sign-in--submit-button"]').click();
  //cy.wait(2000);
});

Then(/^it should pass$/, function() {
  expect(1).to.eq(1);
  /* 
  cy.get("#username").type('diotest2');
    cy.wait(2000);
    cy.get("#password").type('diotest');
    cy.wait(2000);
    cy.get("#kc-login").click();
    cy.wait(10000);
    
 */
});
