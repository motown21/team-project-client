'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')
const teamEvents = require('./teams/events')

$(() => {
  $('.authenticated').hide()

  $('#sign-up').on('submit', authEvents.onSignUp)
  // event listener for sign in
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create event listener changePassword
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create event listener sign out
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Team Event listener menu buttons
  $('#all-teams-button').on('click', function () {
    $('#team-index').click()
  })
  $('#create-team-button').on('click', function () {
    $('#create-team').show()
  })
  $('#update-team-button').on('click', function () {
    $('#update-team').show()
  })
  $('#show-team-button').on('click', function () {
    $('#show-team').show()
  })
  $('#destroy-team-button').on('click', function () {

  })
  // Team event listeners
  // find all teams
  $('#team-index').on('click', teamEvents.onGetTeams)
  // create event listener create
  $('#create-team').on('submit', teamEvents.onCreateTeam)
  // create event listener update
  $('#update-team').on('submit', teamEvents.onUpdateTeam)
  // create event listener show
  $('#show-team').on('submit', teamEvents.onShowTeam)
  // create event listener destroy
  $('#destroy-team').on('submit', teamEvents.onDestroyTeam)
})
