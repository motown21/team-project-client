'use strict'
const config = require('./../config')
const store = require('./../store')

const playerIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/players',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createPlayer = function (playerData) {
  return $.ajax({
    url: config.apiUrl + '/players',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: playerData
  })
}

const updatePlayer = function (playerData) {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/players/' + playerData.player._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: playerData
  })
}

const destroyPlayer = function (playerData) {
//  console.log('player id is ', playerData.player.id)
  return $.ajax({
    url: config.apiUrl + '/players/' + playerData.player.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  playerIndex,
  createPlayer,
  updatePlayer,
  destroyPlayer

}
