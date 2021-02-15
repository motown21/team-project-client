'use strict'

const indexSuccess = function (response) {
  let playerHTML = ''

  response.players.forEach(player => {
    const currentPlayer =
      (`
      <div>
      <h4>Name: ${player.name}</h4>
      <p>Position: ${player.position}</p>
      <p>Id: ${player._id}</p>
      <br>
      </div>
    `)
    playerHTML += currentPlayer
  })
  $('#player-index-message').html(playerHTML)
  $('form').trigger('reset')
}

const indexFailure = function (error) {
  $('#message').text('Error on getting players' + error.messge)
}

const createSuccess = function (response) {
  $('#message').text('Player Created')
  // console.log(response)

  let playerHTML = ''
  // loop through API response data
  response.players.forEach(player => {
    // build HTML element with data
    const currentPlayer =
      (`
      <div>
      <h4>Name: ${player.name}</h4>
      <p>Position: ${player.position}</p>
      <p>Id: ${player._id}</p>
      <br>
      </div>
    `)
    playerHTML += currentPlayer
    // append teamHTML to our team-display element
  })
  $('#create-player-message').html(playerHTML)
  $('form').trigger('reset')
}

const createFailure = function (error) {
  $('#messsage').text('Player Failed' + error.responseJSON.message)

  $('#error-message').html('Something went wrong, please try again.')
  $('#error-message').addClass('failure')

  // reset all forms
  $('form').trigger('reset')
}

const updateSuccess = function (response) {
  // console.log('update sucessesful', response)
  $('#message').text('You successfully updated the player')
  $('form').trigger('reset')
}

const updateFailure = function () {
  $('#messsage').text('Update Failed')
}

const destroySuccess = function () {
  console.log('delete sucessesful')
  $('#message').text('You successfully deleted the player')
  // trigger rest
  $('form').trigger('reset')
}

const destroyFailure = function (error) {
  $('#message').text('Error on getting players' + error.messge)
}

module.exports = {
  indexSuccess,
  indexFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  destroyFailure
}
