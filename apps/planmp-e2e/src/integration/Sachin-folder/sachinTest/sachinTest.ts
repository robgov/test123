/// <reference types="cypress" />
import {
  Before,
  After,
  Given,
  When,
  Then,
  And,
} from "cypress-cucumber-preprocessor/steps";
import { when } from "cypress/types/jquery";

import sachinhomepageelement from '../../PageObjectModel/sachinhomepageelement'


const homepage = new sachinhomepageelement()

Given(/^the user navigates to the banking app home page$/, function () {
  //expect(1).to.eq(1);
  homepage.navigateToURL()

});


When(/^the user verify the title of the page$/, function () {

  //homepage.customerloginBtn()
  homepage.validateTitle()

});

And
When(/^the user clicks on Sign-In button$/, function () {

  //homepage.customerloginBtn()
  homepage.loginAsBankMng()

});

And
When(/^the user clicks on Add Customer button and enter information in all fields$/, function () {

  //homepage.customerloginBtn()
  homepage.AddCustomer()
  homepage.firstName()
  homepage.lastName()
  homepage.postalCode()
  homepage.addingCustomer()
  homepage.openAccount()
  homepage.selectCustomer()
  homepage.selectCurrenty()
  homepage.clickProcess()
  

});





Then(/^the user should be logged IN successfully$/, function () {
  expect(1).to.eq(1);
});

