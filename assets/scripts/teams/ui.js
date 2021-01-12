'use strict'
// const store = require('./../store')

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
      <p>Id: ${team._id}</p>
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
  $('#message').text('Team Created')
  console.log(response)

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
      <p>ID: ${team._id}</p>
      <br>
      </div>
    `)
    teamHTML += currentTeam
    // append teamHTML to our team-display element
  })
  $('#create-team-message').html(teamHTML)
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
  $('#message').text('You successfully updated the team')
  console.log(response)

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
      <p>Id: ${team.id}</p>
      <br>
      </div>
    `)
    teamHTML += currentTeam
    // append teamHTML to our team-display element
  })
  $('#update-team-message').html(teamHTML)
  // setTimeout(() => {
  //   $('#update-team-message').html('')
  //   $('#update-team-message').removeClass('success')
  // }, 5000)

  // // reset all forms
  // $('form').trigger('reset')
}

// const updateFailure = function (error) {
// $('#update-team-message').text('Error on getting team')

// const showSuccess = function (response) {
//   $('#message').text('show Success')
//   console.log(response)
//
//   let teamHTML = ''
//   // loop through API response data
//   response.teams.find(team => {
//     // build HTML element with data
//     const currentTeam = (`
//       <div>
//       <h4>Name: ${team.name}</h4>
//       <p>Coach: ${team.coach}</p>
//       <p>Mascot: ${team.mascot}</p>
//       <p>Record: ${team.record}</p>
//       <p>City: ${team.city}</p>
//       <p>id: ${team._id}</p>
//       <br>
//       </div>
//     `)
//     teamHTML += currentTeam
//     // append teamHTML to our team-display element
//   })
//   $('#show-team-message').html(teamHTML)
//   // reset all forms
//   $('form').trigger('reset')
// }
const destroySuccess = function () {
  // add success message to our delete-team -message element
  $('#message').text('You successfully deleted the team')

  // append teamHTML to our team-display element
  setTimeout(() => {
    $('#delete-team-message').html('')
    $('#delete-team-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const destroyFailure = function (error) {
  $('#message').text('Error on deleting team')

  console.error('onDestroyFailure ran. Error is :', error)
}

module.exports = {
  indexSuccess,
  indexFailure,
  createSuccess,
  createFailure,
  updateSuccess,
  // showSuccess,
  // showFailure,
  destroySuccess,
  destroyFailure
}
