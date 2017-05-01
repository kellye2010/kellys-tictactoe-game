'use strict'

const store = require('../store.js')

const signUpSuccess = (response) => {
  console.log(response)
  $('#sign-up').hide()
}

const signUpFailure = (error) => {
  console.error(error)
  $('#messages').text('Sign up failed')
}

const signInSuccess = (response) => {
  console.log(response)
  // store the user object somehow -- this is the part that saves the user info
  store.user = response.user
  $('#game-board').toggle()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (response) => {
  console.log('response is ', response)
}

const changePasswordFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  $('#game-board').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}

const signOutFailure = (error) => {
  console.error(error)
}

const createGameSuccess = (data) => {
  $('#game-board').show()
  $('#get-games').show()
  $('#get-game').show()
  store.game = data.game
}

const createGameFailure = () => {
  $('#messages').text('Sign in first!')
}

const updateSuccess = (data) => {
}

const updateFailure = (data) => {
}

const getGamesSuccess = (data) => {
  $('#messages').text('You have played ' + (data.games.length) + ' games and ' +
   (data.games[data.games.length - 1].id) + ' was your last game ID')
}

const getGamesFailure = (data) => {
}

const getGameSuccess = (data) => {
}

const getGameFailure = (data) => {
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
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure,
  getGamesSuccess,
  getGamesFailure,
  getGameSuccess,
  getGameFailure
}
