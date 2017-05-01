'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Inside change-password looks like t-hissss!')
  const data = getFormFields(event.target)
  console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('Inside change-password looks like t-hissss!')
  const data = getFormFields(event.target)
  console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
  .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}

const onGetGames = function () {
  event.preventDefault()
  api.getGames()
  .then(ui.getGamesSuccess)
  .catch(ui.getGamesFailure)
}

const onGetGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getGame(data)
  .then(ui.getGameSuccess)
  .catch(ui.getGameFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-game').on('submit', onCreateGame)
  $('#get-games').on('submit', onGetGames)
  $('#get-game').on('submit', onGetGame)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  addHandlers,
  onSignOut
}
