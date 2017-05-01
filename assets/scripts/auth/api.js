'use strict'

const config = require('../config.js')
const store = require('../store.js')
// const signUp = (data) =>
// new Promise(function (resolve, reject) {
//   if (Math.random() > 0.5) {
//     resolve('in signUp')
//   } else {
//     const error = new Error('Random')
//     error.data = data
//     reject(error)
//   }
// })
const signUp = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  console.log('Inside signIn data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  console.log('Inside password, data is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  console.log('Sign out data is: ', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createNewGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = (gameData) => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: gameData
  })
}

const getGames = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createNewGame,
  updateGame,
  getGames,
  getGame
}
