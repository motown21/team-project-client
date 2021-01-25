const store = require('./../store')
// Sign Up
const signUpSuccess = function (response) {
  // creating a message that displays to the user they have sucessfully signed up
  $('#message-sign-up').text('Signed Up Successfully!')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign Up Failed ' + error.message)
}
// Sign In
const signInSuccess = function (response) {
// creating a message that displays that the user has signed in successfully
  $('#message').text('Sign In Success! Welcome')
  store.user = response.user
  // Show messaage when user is signed in
  $('.authenticated').show()
  // Hide messge when user is signed in
  $('.unauthenticated').hide()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
// create a message that displays sign in has failed
  $('#message').text('Sign In Failed with error ' + error.message)
}
// Change Password
const changePasswordSuccess = function (response) {
// creating a message that displays that the user has changed password successfully
  $('#message').text('Change password Successfully')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed with error' + error.message)
// change password failed
}
// Sign Out
const signOutSuccess = function () {
  // console.log('in sign out success')
  // creating a message that displays that the user has signed out successfully
  $('#message').text('Sign out Successful!')
  $('.authenticated').hide()
  $('.unauthenticated').show()
  // store user info
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
