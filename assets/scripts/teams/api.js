'use strict'
const config = require('./../config')
const store = require('./../store')

// make GET request to /teams
const teamIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make POST request to /teams
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

// Make GET request to /teams
const showTeam = function (teamData) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamData.team._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Make PATCH request to /teams
const updateTeam = function (teamData) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamData.team.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: teamData
  })
}

// Make DELETE request to /teams
const destroyTeam = function (teamData) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamData.team._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  teamIndex,
  createTeam,
  showTeam,
  updateTeam,
  destroyTeam

}
