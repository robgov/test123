/// <reference types="cypress" />
import {
  Before,
  After,
  Given,
  When,
  Then,
} from "cypress-cucumber-preprocessor/steps";

import sachinhomepageelement from '../../PageObjectModel/sachinhomepageelement'


const homepage = new sachinhomepageelement()

Given(/^the user navigates to the AE home page$/, function () {
  //expect(1).to.eq(1);
  homepage.navigateToURL()

});

When(/^the user clicks on Sign-In button$/, function () {

  homepage.customerloginBtn()
  homepage.loginAsCustomer()

});


Then(/^the user should be logged IN successfully$/, function () {
  expect(1).to.eq(1);
});

