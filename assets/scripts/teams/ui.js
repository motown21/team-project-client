'use strict'
// get all teams
const indexSuccess = function (response) {
  // create an empty team-display string
  // teams we get back from the API
  //
  let teamHTML = ''
  // loop through each Teams  API response data
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
  $('form').trigger('reset')
}

const indexFailure = function (error) {
  $('#message').text('Error on getting teams' + error.messge)
}
// create a new team
const createSuccess = function (response) {
  $('#message').text('Team Created')
  // console.log(response)

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
// update teams

// const showSuccess = function (response) {
//   // add success message to our delete-team -message element
//   $('#message').text('You successfully showed the team')
//   let teamHTML = ''
//   // loop through each Teams  API response data
//   response.teams.forEach(team => {
//     // build HTML element with data
//     const currentTeam =
//       (`
//       <div>
//       <h4>Name: ${team.name}</h4>
//       <p>Coach: ${team.coach}</p>
//       <p>Mascot: ${team.mascot}</p>
//       <p>Record: ${team.record}</p>
//       <p>City: ${team.city}</p>
//       <p>Id: ${team._id}</p>
//       <br>
//       </div>
//     `)
//     teamHTML += currentTeam
//     // append teamHTML to our team-display element
//   })
//   $('#team-index-message').html(teamHTML)
//   // trigger rest
//   $('form').trigger('reset')
// }

// const showFailure = function (error) {
//   $('#message').text('Error on getting teams' + error.messge)
// }

const updateSuccess = function (response) {
  // creating a message that displays to the user they have sucessfully updated a team
  $('#message').text('You successfully updated the team')
  $('form').trigger('reset')
}

const updateFailure = function () {
  $('#messsage').text('Update Failed')
}
// destroy team
const destroySuccess = function () {
  // add success message to our delete-team -message element
  $('#message').text('You successfully deleted the team')
  // trigger rest
  $('form').trigger('reset')
}

const destroyFailure = function (error) {
  $('#message').text('Error on getting teams' + error.messge)
}

module.exports = {
  indexSuccess,
  indexFailure,
  createSuccess,
  createFailure,
  // showSuccess,
  // showFailure,
  updateSuccess,
  updateFailure,
  destroySuccess,
  destroyFailure
}
