'use strict'
const config = require('./../config')
const store = require('./../store')

// make GET request to /teams
const index = function () {
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
const show = function (teamData) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamData.team.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// Make DELETE request to /teams
const destroy = function (teamData) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamData.team.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
// Make PATCH request to /teams
const update = function (teamData) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + teamData.team.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: teamData
  })
}

module.exports = {
  index,
  createTeam,
  show,
  destroy,
  update

}
