'use strict'
const store = require('./../store')

const newTeamSuccess = function (response) {
  $('#message').text('You created a New Team')
  store.team = response.team
  console.log(response)
}
const newTeamFailure = function (error) {
  $('#messsage').text('Team Failed' + error.responseJSON.message)
}
module.exports = {
  newTeamSuccess,
  newTeamFailure
}
