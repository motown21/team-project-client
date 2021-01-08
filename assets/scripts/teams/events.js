'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateTeam = function (event) {
  // const data = event.target
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createTeam(formData)

    .then(function (response) {
      return response
    })
    .then(ui.newTeamSuccess)
    .catch(ui.newTeamFailure)
}

// const onUpdateTeam = function (event) {
//   // Prevent the update team page from refreshing
//   event.preventDefault()
//
//   // create functions to run when updateTeam is sucessful or fails
//   api.updateTeam(formData)
//     .then(ui.updateTeamSuccess)
//     .catch(ui.updateTeamFailure)
// }
//
// const onDestroyTeam = function (event) {
//   console.log('on signout event')
//   event.preventDefault()
//
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const onShowTeam = function (event) {
//   // Prevent the change password page form refreshing
//   event.preventDefault()
//
//   // Get form data and use event.target as the form
//   const form = event.target
//   const formData = getFormFields(form)
//
//   // create functions to run when change password is sucessful or fails
//   api.changePassword(formData)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }

module.exports = {
  onCreateTeam
}
