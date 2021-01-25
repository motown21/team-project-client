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
  // $('#team-index').on('click', function () {
  //   $('#team-index-message').toggle()
  // })

  $('#all-teams-button').on('click', function () {
    // $('#team-index-message').toggle()
    $('#team-index-message').toggle()
    $('#team-index').hide()
    $('#create-team').hide()
    $('#update-team').hide()
    $('#destroy-team').hide()
  })
  $('#create-team-button').on('click', function () {
    $('#create-team').show()
    $('#update-team').hide()
    $('#destroy-team').hide()
  })
  $('#update-team-button').on('click', function () {
    $('#update-team').show()
    $('#create-team').hide()
    $('#destroy-team').hide()
  })
  // $('#show-team-button').on('click', function () {
  //   $('#show-team').show()
  // })
  $('#destroy-team-button').on('click', function () {
    $('#destroy-team').show()
    $('#update-team').hide()
    $('#create-team').hide()
  })
  // Team event listeners
  // find all teams
  $('#team-index').on('click', teamEvents.onGetTeams)
  // create event listener create
  $('#create-team').on('submit', teamEvents.onCreateTeam)
  // create event listener update
  $('#update-team').on('submit', teamEvents.onUpdateTeam)
  // create event listener show
  // $('#show-team').on('submit', teamEvents.onShowTeam)
  // // create event listener destroy
  $('#destroy-team').on('submit', teamEvents.onDestroyTeam)
})
