'use strict'
// seudocode game logic building
// requirements
// Everything is set to 0 at the load of app screen
// Player X goes first, so initialize X as first player
const player_x
const player_o
const turn = 'X'
const score = {
    'X': 0,
    'O': 0
}
// need an array that holds the place of a square in the gameboard

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Game winning combinations
const winCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

// We want the board to respond each time a there is a valid click on a square by a player
$('.gameSquare').on('click', function () {
  alert('Hello World!')
  //Place an 'X' or 'O' value into the selected square, and disable it from being clicked again until the game has been RESET
})

// after each move, we want the game engine to run a check on the values in the winning combinations
//if winCombinations is met, then console.log('Player__ has won!')

// if all 9 spaces in the array have been selected and selectedSquares is not equal
//to winCombinations then it was a Draw

const gameOver = true;
//Then reset game without refreshing page
