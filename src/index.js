import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducer from './reducers/reducer.js';

import App from './components/App'

const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
 <App />
 </ Provider>,
  document.getElementById('app')
)

module.hot.accept();