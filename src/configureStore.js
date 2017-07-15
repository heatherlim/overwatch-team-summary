import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import owApp from './reducers'


export default function configureStore(preloadedState) {
  return createStore(
    owApp,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}