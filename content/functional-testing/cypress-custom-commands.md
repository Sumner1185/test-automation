<!SLIDE>
# Cypress Custom Commands
A custom Cypress command is a method that you write which you can use specifically on your application. For example, we can create our custom command for the 'login' action that can be re-used with different data.

<pre><code>
  Cypress.Commands.add('login', (email, password) => {
    cy.get('.username')
      .type(email);

    cy.get('.password')
      .type(password);

    cy.get('[data-test=login-button]')
      .click();
});
</code></pre>

