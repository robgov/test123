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

    clickCustomer() {
        cy.get('[ng-class="btnClass3"]').click()
    }
    verifynewcustomer() {


        var i;
        i = 0;
        cy.get('#userSelect option').each((el) => {


            if (el.text() === 'Harry Potter') {

                // cy.wrap(el).then( obj => {
                //  const bt = obj.text();
                // cy.log (bt);
                //cy.wrap(el).as('bt')
                cy.wrap(el.text())
                cy.log(i);
                //cy.wrap(el).click()
                // cy.get('#userSelect').select('6')
            }
            i++;

        })


    }

clickhome(){

    cy.get('.home').click()

}

selectlogincustomer()
{

    cy.get('#userSelect').select(data.customer)
    cy.get('form.ng-valid > .btn').click()
}

 
tabWithdrawal(){
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('[ng-class="btnClass3"]').click()

}

tabdeposit(){
    cy.get('[ng-class="btnClass2"]').click()
    
}


enterAmountwithdraw(){
    cy.get('.form-control').type(data.withdrawalamount)
    cy.get('form.ng-dirty > .btn').click()

}

enterAmountdeposit(){
    cy.get('.form-control').type(data.depositamount)
    cy.get('form.ng-dirty > .btn').click()

}

verifywithdrawalerror(){

    cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.');
    

}
verifydepositmessage(){

    cy.get('.error').should('have.text', 'Deposit Successful');
    cy.wait(1000)
  

}

tabtransaction(){

    
    cy.get('[ng-class="btnClass1"]').click()
    cy.wait(2000)
    cy.get('.fixedTopBox > [style="float:left"]').click()
    cy.wait(1000)
    cy.get('[ng-class="btnClass1"]').click()
    
}




}

