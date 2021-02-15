'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onGetPlayers = function () {
  event.preventDefault()
  api.playerIndex()

    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onCreatePlayer = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createPlayer(formData)

    .then(function (response) {
      return response
    })
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onUpdatePlayer = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  // create functions to run when updateTeam is sucessful or fails
  api.updatePlayer(formData)
    .then(function (response) {
      return response
    })
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onDestroyPlayer = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log('get form fileds here ' + getFormFields)

  api.destroyPlayer(formData)

    .then(ui.destroySuccess)
    .catch(ui.destroyFailure)
}

module.exports = {
  onGetPlayers,
  onCreatePlayer,
  onUpdatePlayer,
  onDestroyPlayer
}
