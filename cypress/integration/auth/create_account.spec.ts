import "@testing-library/cypress/add-commands"

describe("sign up", () => {
  it("create account", () => {
    // click on sign up button
    cy.visit("/")
    cy.findByRole("link", {
      name: /sign up/i,
    }).click()

    // add email and password and redirect to home
    const email = "foo@example.com"
    const pass = "hogehogehoge"

    cy.findByRole("textbox", {
      name: /email/i,
    }).type(email)
    cy.findByLabelText(/password/i).type(pass)
    cy.findByRole("button", {
      name: /create account/i,
    }).click()

    // success create account
    cy.on("uncaught:exception", (error) => {
      if (
        /The following error originated from your application code, not from Cypress./gi.test(
          error.message
        )
      ) {
        return false
      }
      return true
    })
    cy.findByText(/logout/i)
  })
})
