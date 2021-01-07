'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')
// const teamsEvents = require('./teams/events')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  // event listener for sign in
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create event listener changePassword
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create event listener sign out
  $('#sign-out').on('submit', authEvents.onSignOut)
})
