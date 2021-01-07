// const store = require('./../store')

const signUpSuccess = function (response) {
  // creating a message that displays to the user they have sucessfully signed up
  $('#message').text('Signed Up Successfully!')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign Up Failed ' + error.message)
}
module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure
}
