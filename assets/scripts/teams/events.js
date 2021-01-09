'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// index GET all teams
const onGetTeams = function () {
  // API call to get all of the team
  api.index()

  // create functions to run when Get all Teams is sucessful or fails
    .then(ui.indexSuccess)
    .catch(ui.onError)
}

const onCreateTeam = function (event) {
  // const data = event.target
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createTeam(formData)

    .then(function (response) {
      return response
    })
    .then(ui.createSuccess)
    .catch(ui.createFailure)
  $('#create-team-button').hide()
}

const onUpdateTeam = function (event) {
  // Prevent the update team page from refreshing
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // create functions to run when updateTeam is sucessful or fails
  api.updateTeam(formData)
    .then(ui.updateTeamSuccess)
    .catch(ui.updateTeamFailure)
}

// index GET one team
const onGetTeam = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // API call for getting one team
  api.show(formData)

  // create functions to run when Get one Team is sucessful or fails
    .then(ui.showSuccess)
    .catch(ui.onError)
}

const onDestroyTeam = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // API call for deleting one team
  api.destroy(formData)

  // create functions to run when Delete one Team is sucessful or fails
    .then(ui.destroySuccess)
    .catch(ui.onError)
}

module.exports = {
  onGetTeams,
  onCreateTeam,
  onUpdateTeam,
  onGetTeam,
  onDestroyTeam
}
