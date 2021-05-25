/// <reference types="cypress" />

export default class sachinhomepageelement {

    customerloginBtn() {

       // return cy.get('button.btn.btn-primary.btn-lg')

      return cy.get('.borderM > :nth-child(30) > .btn')
    }

    navigateToURL() {

        cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    }

    validateTitle() {

        return cy.title()


    }

    loginAsCustomer() {
        this.customerloginBtn().click()

    }

}