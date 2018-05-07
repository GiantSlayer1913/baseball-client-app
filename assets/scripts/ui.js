'use strict'
const store = require('./store')

// Auth Ui below
const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  $('#sign-up').trigger('reset')
}
const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#change-password').css('display', 'block')
  $('#sign-out').css('display', 'block')
  $('#create-teams').css('display', 'block')
  $('#update-teams').css('display', 'block')
  $('#get-teams').css('display', 'block')
  $('#destroy-team').css('display', 'block')
  $('#team-forms').css('display', 'block')
  $('#sign-up').css('display', 'none')
  $('#sign-up').trigger('reset')
  $('#sign-in').css('display', 'none')
  $('#sign-in').trigger('reset')
  store.user = data.user
}
const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
  $('#change-password').trigger('reset')
}
const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('#create-teams').css('display', 'none')
  $('#update-teams').css('display', 'none')
  $('#get-teams').css('display', 'none')
  $('#destroy-team').css('display', 'none')
  $('#team-forms').css('display', 'none')
  $('#team-list').text('')
  $('#message2').text('')
  $('#message2').css('background', 'none')
  $('#create-player').css('display', 'none')
  $('#update-player').css('display', 'none')
  $('#get-all-players').css('display', 'none')
  $('#get-your-players').css('display', 'none')
  $('#delete-players').css('display', 'none')
  $('#get-all-players-list').css('display', 'none')
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}

// Teams ui below
$('#update-player')
$('#get-all-players')
$('#get-your-players')
$('#delete-players')

const createTeamsSuccess = (data) => {
  $('#message').text('Successfully created team')
  $('#message').css('background-color', 'green')
  $('#create-teams').trigger('reset')
  $('#create-player').css('display', 'block')
  $('#update-player').css('display', 'block')
  $('#get-all-players').css('display', 'block')
  $('#get-your-players').css('display', 'block')
  $('#delete-players').css('display', 'block')
}
const createTeamsFailure = () => {
  $('#message').text('Failure to create team')
  $('#message').css('background-color', 'red')
  $('#create-teams').trigger('reset')
}

const updateTeamsSuccess = (data) => {
  $('#message').text('Successfully updated team')
  $('#message').css('background-color', 'green')
  $('#update-teams').trigger('reset')
}
const updateTeamsFailure = () => {
  $('#message').text('Failure to update team')
  $('#message').css('background-color', 'red')
  $('#update-teams').trigger('reset')
}

const getTeamsSuccess = (data) => {
  // Clears form fields
  $('#team-list').text('')
  $('#message2').text('')
  $('#message2').css('background', 'none')
  // Prints team names
  if (data.teams.length > 0) {
    $('#team-list').append('Team ID - Team Name', '<br>')
    for (let i = 0; i < data.teams.length; i++) {
      const teamName = data.teams[i].team_name
      const teamId = data.teams[i].id
      $('#team-list').append(teamId, ' - ', teamName, '<br>')
      $('#team-list').css('color', 'black')
      $('#team-list').css('background', 'rgb(199,199,199)')
      $('#team-list').css('display', 'block')
      $('#team-list').css('text-align', 'center')
      $('#team-list').css('font-size', '20px')
    }
  } else {
    $('#team-list').append("You don't have any teams. First, go to 'Create Teams!' and enter a name for your 'Team Name'.")
    $('#team-list').css('background-color', 'red')
    $('#team-list').css('font color', '#ffffff')
  }
  $('#message2').css('display', 'block')
  $('#message2').text('Successfully got teams')
  $('#message2').css('background-color', 'green')
  $('#create-player').css('display', 'block')
  $('#update-player').css('display', 'block')
  $('#get-all-players').css('display', 'block')
  $('#get-your-players').css('display', 'block')
  $('#delete-players').css('display', 'block')
}

const getTeamsFailure = () => {
  $('#message2').text('Failure to get teams')
  $('#message2').css('background-color', 'red')
}

const destroyTeamSuccess = (data) => {
  $('#message2').text('Successfully deleted team')
  $('#message2').css('background-color', 'green')
  $('#destroy-team').trigger('reset')
}
const destroyTeamFailure = () => {
  $('#message2').text('Failure to delete team')
  $('#message2').css('background-color', 'red')
  $('#destroy-team').trigger('reset')
}
// Player UI below

// CREATE PLAYER SUCCESS & FAILURE
const createPlayerSuccess = (data) => {
  $('#message2').text('Successfully created player')
  $('#message2').css('background-color', 'green')
  $('#create-teams').trigger('reset')
  store.players = data.players
}
const createPlayerFailure = () => {
  $('#message2').text('Failure to create player')
  $('#message2').css('background-color', 'red')
  $('#create-teams').trigger('reset')
}

// UPDATE PLAYER SUCCESS & FAILURE
const updatePlayerSuccess = (data) => {
  $('#message2').text('Successfully update player')
  $('#message2').css('background-color', 'green')
  $('#update-player').trigger('reset')
}
const updatePlayerFailure = () => {
  $('#message2').text('Failure to update player')
  $('#message2').css('background-color', 'red')
  $('#update-player').trigger('reset')
}

// GET ALL PLAYERS SUCCESS & FAILURE
const getAllPlayersSuccess = (data) => {
  // Clears form fields
  $('#get-all-players-list').text('')
  $('#message2').text('')
  $('#message2').css('background', 'none')
  // Prints players names
  if (data.players.length > 0) {
    $('#get-all-players-list').append('Name  -  ID', '<br>')
    for (let i = 0; i < data.players.length; i++) {
      const playerName = data.players[i].name
      const playerId = data.players[i].id
      $('#get-all-players-list').append(playerName, ' - ', playerId, '<br>')
      $('#get-all-players-list').css('color', 'black')
      $('#get-all-players-list').css('background', 'rgb(199,199,199)')
      $('#get-all-players-list').css('display', 'block')
      $('#get-all-players-list').css('text-align', 'center')
      $('#get-all-players-list').css('font-size', '20px')
    }
  } else {
    $('#get-all-players-list').append("You don't have any teams. First, go to 'Create Teams!' and enter a name for your 'Team Name'.")
    $('#get-all-players-list').css('background-color', 'red')
    $('#get-all-players-list').css('font color', '#ffffff')
  }
  $('#message2').text('Successfully got all players')
  $('#message2').css('background-color', 'green')
  $('#get-all-players').trigger('reset')
}

const getAllPlayersFailure = () => {
  $('#message2').text('Failure to get all players')
  $('#message2').css('background-color', 'red')
  $('#get-all-players').trigger('reset')
}

// GET YOUR PLAYERS SUCCESS & FAILURE
// :name, :position, :bat, :throw, :team_id
const getYourPlayersSuccess = (data) => {
  // Clears form fields
  $('#get-your-players-list').text('')
  $('#message2').text('')
  $('#message2').css('background', 'none')
  // Prints players names
  if (data.players.length > 0) {
    $('#get-your-players-list').append('Your Team Players', '<br>', 'Name', ' - ', 'Position', ' - ', 'Bat', ' - ', 'Throw')
    for (let i = 0; i < data.players.length; i++) {
      const playerName = data.players[i].name
      const playerId = data.players[i].id
      $('#get-your-players-list').append(playerName, ' - ', playerId, '<br>')
      $('#get-your-players-list').css('color', 'black')
      $('#get-your-players-list').css('background', 'rgb(199,199,199)')
      $('#get-your-players-list').css('display', 'block')
      $('#get-your-players-list').css('text-align', 'center')
      $('#get-your-players-list').css('font-size', '20px')
    }
  } else {
    $('#get-your-players-list').append("You don't have any teams. First, go to 'Create Teams!' and enter a name for your 'Team Name'.")
    $('#get-your-players-list').css('background-color', 'red')
    $('#get-your-players-list').css('font color', '#ffffff')
  }
  $('#message2').text('Successfully got your players')
  $('#message2').css('background-color', 'green')
  $('#get-your-players').trigger('reset')
}
const getYourPlayersFailure = () => {
  $('#message2').text('Failure to get your players')
  $('#message2').css('background-color', 'red')
  $('#get-your-players').trigger('reset')
}

// DELETE PLAYERS SUCCESS & FAILURE
const deletePlayersSuccess = (data) => {
  $('#message2').text('Successfully deleted your players')
  $('#message2').css('background-color', 'green')
  $('#delete-players').trigger('reset')
}
const deletePlayersFailure = () => {
  $('#message2').text('Failure to delete your players')
  $('#message2').css('background-color', 'red')
  $('#delete-players').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createTeamsSuccess,
  createTeamsFailure,
  updateTeamsSuccess,
  updateTeamsFailure,
  getTeamsSuccess,
  getTeamsFailure,
  destroyTeamSuccess,
  destroyTeamFailure,
  createPlayerSuccess,
  createPlayerFailure,
  updatePlayerSuccess,
  updatePlayerFailure,
  getAllPlayersSuccess,
  getAllPlayersFailure,
  getYourPlayersSuccess,
  getYourPlayersFailure,
  deletePlayersSuccess,
  deletePlayersFailure
}
