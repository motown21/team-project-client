const store = require('./../store')

const signUpSuccess = function (response) {
  // creating a message that displays to the user they have sucessfully signed up
  $('#message-sign-up').text('Signed Up Successfully!')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign Up Failed ' + error.message)
}
// creating a message that displays that the user has signed in successfully
const signInSuccess = function (response) {
  $('#message').text('Sign In Success! Welcome')
  store.user = response.user
  // Show messaage when user is signed in
  $('.authenticated').show()
  // Hide messge when user is signed in
  $('.unauthenticated').hide()
}

const signInFailure = function (error) {
  $('#message').text('Sign In Failed with error ' + error.message)
}

// creating a message that displays that the user has changed password successfully
const changePasswordSuccess = function (response) {
  $('#message').text('Change password Successfully')
}
const changePasswordFailure = function (error) {
  $('#message').text('Change password failed with error' + error.message)
}
// creating a message that displays that the user has signed out successfully
const signOutSuccess = function () {
  console.log('in sign out success')
  $('#message').text('Sign out Successful!')
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('#game-board').hide()
  store.user = null
  // reset form
  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('message').text('Sign out Failed' + error.responseJSON.message)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
