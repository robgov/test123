/// <reference types="cypress" />
const data = require("../../../fixtures/example.json");
import { injectAxe } from '../../../support/app.po';
import { createHtmlReport } from 'axe-html-reporter';
import {
  Before,
  After,
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

Given(/^we want a simple pass$/, function() {
  expect(1).to.eq(1);
  cy.visit('https://acods-test.os99.gov.ab.ca/home');
  cy.wait(5000)
  
  //cy.injectAxe();
 
 injectAxe()



/*
  cy.configureAxe({
    branding: {
      brand: String,
      application: String
    },
    reporter: 'option',
    checks: [Object],
    rules: [Object],
    locale: Object
  })
*/

  /*
  const { createHtmlReport } = require("../../../axe-html-reporter");
  createHtmlReport({ results: { violations: 'Result[]' } });
*/

  //1. Check all Accessibility Failures on the Page
  cy.checkA11y();  

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
  /* cy.checkA11y(null!, {
    includedImpacts: ["critical", "serious"],
  });
 */
});


  