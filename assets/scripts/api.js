'use strict'
const config = require('./config')
const store = require('./store')

// Auth functions below
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // headers: {
    //   contentType: 'application/json'
    // },
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Team functions below
const createTeams = function (data) {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updateTeams = function (data) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + data.team.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const getTeams = (data) => {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const destroyTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/teams/' + data.team.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// Player Functions below
const createPlayer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/players',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const updatePlayer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/players/' + data.team.player.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const getAllPlayers = (data) => {
  return $.ajax({
    url: config.apiUrl + '/players',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getYourPlayers = (data) => {
  return $.ajax({
    url: config.apiUrl + '/players/' + data.players,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePlayers = function (data) {
  return $.ajax({
    url: config.apiUrl + '/players/' + data.players.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createTeams,
  updateTeams,
  getTeams,
  destroyTeam,
  createPlayer,
  updatePlayer,
  getAllPlayers,
  getYourPlayers,
  deletePlayers
}
