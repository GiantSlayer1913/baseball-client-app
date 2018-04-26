'use strict'
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')

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

// Teams functions below here:
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

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUP)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-teams').on('submit', onCreateTeams)
  $('#update-teams').on('submit', onUpdateTeams)
  $('#get-teams').on('submit', onGetTeams)
  $('#destroy-team').on('submit', onDestroyTeam)
}

module.exports = {
  addHandlers
}
