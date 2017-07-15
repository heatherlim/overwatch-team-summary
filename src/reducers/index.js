import { combineReducers } from 'redux'
import players from './players'
import playersResponse from './playersResponse'

const owApp = combineReducers({
  players,
  playersResponse
})

export default owApp