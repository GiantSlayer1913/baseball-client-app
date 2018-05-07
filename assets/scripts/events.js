'use strict'
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')

// AUTH FUNCTIONS
const onSignUP = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// TEAMS FUNCITONS BELOW
const onCreateTeams = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createTeams(data)
    .then(ui.createTeamsSuccess)
    .catch(ui.createTeamsFailure)
}
const onUpdateTeams = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateTeams(data)
    .then(ui.updateTeamsSuccess)
    .catch(ui.updateTeamsFailure)
}
const onGetTeams = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getTeams(data)
    .then(ui.getTeamsSuccess)
    .catch(ui.getTeamsFailure)
}
const onDestroyTeam = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroyTeam(data)
    .then(ui.destroyTeamSuccess)
    .catch(ui.destroyTeamFailure)
}

// PLAYERS CRUD
const onCreatePlayer = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createPlayer(data)
    .then(ui.createPlayerSuccess)
    .catch(ui.createPlayerFailure)
}
const onUpdatePlayer = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePlayer(data)
    .then(ui.updatePlayerSuccess)
    .catch(ui.updatePlayerFailure)
}

const onGetAllPlayers = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAllPlayers(data)
    .then(ui.getAllPlayersSuccess)
    .cathc(ui.getAllPlayersFailure)
}

const onGetYourPlayers = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getYourPlayers(data)
    .then(ui.getYourPlayersSuccess)
    .catch(ui.getYourPlayersFailure)
}

const onDeletePlayers = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deletePlayers(data)
    .then(ui.deletePlayersSuccess)
    .catch(ui.deletePlayersFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUP)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-teams').on('submit', onCreateTeams)
  $('#update-teams').on('submit', onUpdateTeams)
  $('#get-teams').on('submit', onGetTeams)
  $('#destroy-team').on('submit', onDestroyTeam)
  $('#create-player').on('submit', onCreatePlayer)
  $('#update-player').on('submit', onUpdatePlayer)
  $('#get-all-players').on('submit', onGetAllPlayers)
  $('#get-your-players').on('submit', onGetYourPlayers)
  $('#delete-players').on('submit', onDeletePlayers)
}

module.exports = {
  addHandlers
}
