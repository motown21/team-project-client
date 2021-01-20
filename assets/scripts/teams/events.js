'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// index GET all teams
const onGetTeams = function () {
  event.preventDefault()
  // API call to get all of the team
  api.teamIndex()

  // create functions to run when Get all Teams is sucessful or fails
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
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
//  $('#create-team-button').hide()
}

const onUpdateTeam = function (event) {
  // Prevent the update team page from refreshing
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // create functions to run when updateTeam is sucessful or fails
  api.updateTeam(formData)
    .then(function (response) {
      return response
    })
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

// index GET one team
const onShowTeam = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // API call for getting one team
  api.showTeam(formData)

  // create functions to run when Get one Team is sucessful or fails
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onDestroyTeam = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  const form = event.target
  // console.log(event.target)
  const formData = getFormFields(form)
  console.log('get form fileds here ' + getFormFields)
  // API call for deleting one team
  api.destroyTeam(formData)

  // create functions to run when Delete one Team is sucessful or fails
    .then(ui.destroySuccess)
    .catch(ui.destroyFailure)
}

module.exports = {
  onGetTeams,
  onCreateTeam,
  onShowTeam,
  onUpdateTeam,
  onDestroyTeam
}
