/// <reference types="cypress" />


const data = require('../../fixtures/example.json')

export default class sachinhomepageelement {


   /*
    before(() => {
        cy.fixture('example').then((data) => {

            globalThis.data = data
        })

    })
    */


      
  


    navigateToURL() {

        cy.visit('/')
    }

    validateTitle() {


        cy.title().should('eq', 'Protractor practice website - Banking App')
       // expect(1).to.eq(1)


    }


    customerloginBtn() {

        // return cy.get('button.btn.btn-primary.btn-lg')

        return cy.get('.borderM > :nth-child(1) > .btn')

    }

    loginAsCustomer() {
        this.customerloginBtn().click()

    }


    bankMngloginBtn() {

        // return cy.get('button.btn.btn-primary.btn-lg')

        return cy.get(':nth-child(3) > .btn')
    }

    loginAsBankMng() {
        this.bankMngloginBtn().click()

    }

    addCustomerBtn() {

        // return cy.get('button.btn.btn-primary.btn-lg')

        return cy.get('[ng-class="btnClass1"]')
    }

    AddCustomer() {
        this.addCustomerBtn().click()

    }




    firstName() {

        return cy.get(':nth-child(1) > .form-control').type(data.firstname)
    }

    lastName() {

        return cy.get(':nth-child(2) > .form-control').type(data.lastname)
    }


    postalCode() {

        return cy.get(':nth-child(3) > .form-control').type(data.postalcode)
    }
    
    addingCustomer() {

        cy.get('form.ng-dirty > .btn').click()
    }
    
    openAccount() {

        cy.get('[ng-class="btnClass2"]').click()
    }
    
    selectCustomer() {

        return cy.get('#userSelect').select(data.customer)
    } 

    selectCurrenty() {

        cy.get('#currency').select(data.currency)
    } 

    clickProcess() {

        cy.get('form.ng-dirty > button').click()
    }
   
    
}