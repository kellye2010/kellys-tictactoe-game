'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
//
// const api = require('./api')
// const ui = require('./ui')
// const game = require('./game')

// $('.game-board').find('span').click(function () {
//   $(this).text('X')
// })
const player1 = 'X'
const player2 = 'O'
let whoseTurn = player1

const clickSquare = function (event) {
  event.preventDefault()
  console.log($(this))
  if (whoseTurn === player1) {
    $(this).text('X')
    whoseTurn = player2
  } else {
    $(this).text('O')
    whoseTurn = player1
  }
}

// const onSignIn = function (event) {
//   const data = getFormFields(event.target)
//   event.preventDefault()
//   api.signIn(data)
//     .then(ui.signInSuccess)
//     .catch(ui.signInFailure)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   console.log('Inside change-password looks like t-hissss!')
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   console.log('Inside change-password looks like t-hissss!')
//   const data = getFormFields(event.target)
//   console.log(data)
//   api.signOut(data)
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
const addHandlers = () => {
  $('.square').on('click', clickSquare)
  //   $('#sign-in').on('submit', onSignIn)
  //   $('#change-password').on('submit', onChangePassword)
  //   $('#sign-out').on('submit', onSignOut)
}
//
module.exports = {
  //   onSignIn,
  //   onChangePassword,
  addHandlers
  //   onSignOut
}
