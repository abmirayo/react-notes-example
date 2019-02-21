import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Mierdas redux:
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension'
const envCompose = process.env.NODE_ENV !== "production" ? composeWithDevTools : compose

// Redux Devtools Composing

const store = createStore(
  rootReducer,
  envCompose(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
