'use strict'
const store = require('./../store')

const indexSuccess = function (response) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(response)

  // empty team-display element so we can replace whatever was there with the
  // teams we get back from the API
  // $('#team-display').html('')
  let teamHTML = ''
  // loop through API response data
  response.teams.forEach(team => {
    // build HTML element with data
    const currentTeam =
    (`
      <div>
      <h4>Name: ${team.name}</h4>
      <p>Coach: ${team.coach}</p>
      <p>Mascot: ${team.mascot}</p>
      <p>Record: ${team.record}</p>
      <p>City: ${team.city}</p>
      <br>
      </div>
    `)
    teamHTML += currentTeam
  // append teamHTML to our team-display element
  })
  $('#team-index-message').html(teamHTML)
}

const indexFailure = function (error) {
  $('#message').text('Error on getting teams')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const createSuccess = function (response) {
  $('#message').text('You created a New Team')
  store.team = response.team

  $('#team-display').html('')

  // add class for success messaging
  $('#create-team-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#create-team-message').html('')
    $('#create-team-message').removeClass('success')
  }, 5000)
  // reset form
  $('form').trigger('reset')
}

const createFailure = function (error) {
  $('#messsage').text('Team Failed' + error.responseJSON.message)

  // display a message to the user to let them know what they were doing did
  // not work correctly
  $('#error-message').html('Something went wrong, please try again.')

  // add class for error messaging
  $('#error-message').addClass('failure')

  // use setTimeout to allow the error message to stay for 5 seconds before
  // the message is replaced with '' and the 'failure' class is removed
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}
const updateSuccess = function (response) {
  // add success message to our update-team-message element
  $('#update-team-message').html('You successfully updated the team')

  // empty out the team-display element in case it was displaying information
  // about the team  we just updated, replace with a message for the user to get
  // all the teams again.
  $('#team-display').html('Teaams have changed! Click "Get All Teams" again to see all the Teams.')

  // add class for success messaging
  $('#update-team-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#update-team-message').html('')
    $('#update-team-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}
const showFailure = function (error) {
  $('#message').text('Error on getting team')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const showSuccess = function (response) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(response)

  // build HTML element with data for one team
  const teamHTML = (`
    <h4>Name: ${response.team.name}</h4>
    <p>Coach: ${response.team.coach}</p>
    <p>Mascot: ${response.team.mascot}</p>
    <p>Record: ${response.team.record}</p>
    <p>City: ${response.city}</p>
    <br>
  `)

  // replace whatever was in the team-display element with our teamHTML
  $('#team-display').html(teamHTML)

  // reset all forms
  $('form').trigger('reset')
}
const destroySuccess = function () {
  // add success message to our delete-team -message element
  $('#delete-team-message').html('team successfully deleted!')

  // empty out the team-display element in case it was displaying information
  // about the team we just deleted, replace with a message for the user to get
  // all the team again.
  $('#team-display').html('Teams have changed! Click "Get All Team" again to see all the teams')

  // add class for success messaging
  $('#delete-team-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#delete-team-message').html('')
    $('#delete-team-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}
const destroyFailure = function (error) {
  $('#message').text('Error on deleting team')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

module.exports = {
  indexSuccess,
  indexFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  showSuccess,
  showFailure,
  destroySuccess,
  destroyFailure

}
