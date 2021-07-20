/* eslint-disable cypress/no-unnecessary-waiting */
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
  cy.visit('https://xd.adobe.com/view/a66fffa7-e92a-4288-a430-03af11fb9d22-f33c/screen/f5cbdd0f-2230-4cf3-8a99-727a52ef1b68/');
  cy.wait(5000)

  
  //cy.injectAxe();
 
 injectAxe()
 cy.wait(5000)


 cy.checkA11y();  


});
