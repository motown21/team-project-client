'use strict'
const config = require('./../config')
const store = require('./../store')

const createTeam = function (teamData) {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: teamData
  })
}

module.exports = {
  createTeam
}
