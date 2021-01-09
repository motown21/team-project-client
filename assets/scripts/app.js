'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')
const teamEvents = require('./teams/events')

$(() => {
  $('.authenticated').hide()
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  // event listener for sign in
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create event listener changePassword
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create event listener sign out
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#team-index').on('submit', teamEvents.onGetTeams)
  // create event listener create
  $('#create-team-button').on('submit', teamEvents.onCreateTeam)
  $('#create-team').on('submit', teamEvents.onCreateTeam)
  // create event listener update
  $('#update-team-button').on('submit', teamEvents.onUpdateTeam)
  $('#update-team').on('submit', teamEvents.onUpdateTeam)
  // create event listener show
  $('#show-team').on('submit', teamEvents.onGetTeam)
  // create event listener destroy
  $('#destroy-team').on('submit', teamEvents.onDestroyTeam)
})
