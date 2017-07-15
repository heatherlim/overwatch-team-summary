import 'babel-polyfill'
import fetch from 'isomorphic-fetch'

let nextPlayerId = 0
export const addPlayer = battletag => {
  return {
    type: 'ADD_PLAYER',
    id: nextPlayerId++,
    battletag
  }
}

export const removePlayer = battletag => {
  return {
    type: 'REMOVE_PLAYER',
    battletag
  }
}

export const submitTeam = players => {
  return {
    type: 'SUBMIT_TEAM',
    players
  }
}

function requestPlayerInfo(players) {
  return {
    type: 'REQUEST_PLAYER_INFO',
    players
  }
}

function receivePlayerInfo(player, json) {
  return {
    type: 'RECEIVE_PLAYER_INFO',
    player,
    comprank: json.competitive_rank
  }
}

function handleErrorMessage(player) {
  return {
    type: 'HANDLE_ERROR_MESSAGE',
    error: player
  }
}

export function fetchTeamInfo(players) {
  return dispatch => {
    dispatch(requestPlayerInfo(players))
   Promise.all(players.map(player =>
       fetch('http://localhost:4567/api/' + player.battletag.replace("#", "-"))
       .then(resp => resp.json())
       .catch(err => dispatch(handleErrorMessage(player)))
   )).then(jsonArray => {
     debugger;
       players.forEach(function(player, index){
         dispatch(receivePlayerInfo(player, jsonArray[index]))
       })
   })
 }
}

