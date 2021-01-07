'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  // Prevent the sign in page from refreshing
  event.preventDefault()

  // Get form data and use event.target as the form
  const form = event.target

  const formData = getFormFields(form)

  // create functions to run when sign up is sucessful or fails
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp: onSignUp
}
