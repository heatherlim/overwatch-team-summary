import { combineReducers } from 'redux'
import players from './players'
import playerList from './playerList'
import playersResponse from './playersResponse'

const owApp = combineReducers({
  players,
  playersResponse,
  playerList
})

export default owApp