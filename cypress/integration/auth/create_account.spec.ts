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

describe("already account", () => {
  it("already account", () => {
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

    cy.findByText(/this email is already being used/i)
  })
})

describe("login to logout", () => {
  it("create account", () => {
    // click on login button
    cy.visit("/")
    cy.findByRole("link", {
      name: /login/i,
    }).click()

    // add email and password and redirect to home
    const email = "foo@example.com"
    const pass = "hogehogehoge"

    cy.findByRole("textbox", {
      name: /email/i,
    }).type(email)
    cy.findByLabelText(/password/i).type(pass)
    cy.findByRole("button", {
      name: /login/i,
    }).click()

    // success login
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

    // click on logout button
    cy.findByRole("button", {
      name: /logout/i,
    }).click()

    cy.findByText(/login/i)
  })
})
