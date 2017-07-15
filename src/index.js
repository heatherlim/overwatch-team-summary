import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
// import { createStore } from 'redux'
import owApp from './reducers'
import App from './components/App'

// let store = createStore(owApp)
const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)