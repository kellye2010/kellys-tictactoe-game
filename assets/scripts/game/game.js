'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const events = require('./events')
// seudocode game logic building
// requirements
// Everything is set to 0 at the load of app screen
// Player X goes first, so initialize X as first player
const gameStart = true;
// create a function that loads the game after login

// const player1 = 'X'
// const player2 = 'O'
// const whoseTurn = player1
// const score = {
//   'X': 0,
//   'O': 0
// }
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

const addGameHandlers = () => {
  $('.square').on('click', clickSquare)
  //   $('#sign-in').on('submit', onSignIn)
  //   $('#change-password').on('submit', onChangePassword)
  //   $('#sign-out').on('submit', onSignOut)
}

// instead of using the above, use a player array...?
          // const players = [player1, player2]
          // if players[0] then display 'X'
          // if players[1] then display 'O'
          // use this? --> object.onclick = function(){myScript aka "if" statements and what you want to appear an dwhere on the game board};
          // //or?
          // const playerobject = {[
          //     player1: 'X',
          //     player2: 'O'
          // ]}
// need an array that holds the place of a square in the gameboard

const board = []

// Game winning combinations
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
]


// store.game = create.game
module.exports = {
  clearBoard,
  removeXO,
  startGame,
  addGameHandlers
}
