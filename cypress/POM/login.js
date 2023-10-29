class login{

    ClickToSignIn(){
        return cy.get('.panel > .header > .authorization-link > a')
    }
    
    username()
   {
       return cy.get('input[name="login[username]"]')
   }

    password()
   {
       return cy.get('input[name="login[password]"]')
   }

    submit()
   {
       return cy.get('button[class="action login primary"]')
   }

   successText()
   {
       return cy.get(':nth-child(2) > .greet > .logged-in')
   }

    errorText()
   {
       return cy.get('.message-error > div')
   }


}
export default login