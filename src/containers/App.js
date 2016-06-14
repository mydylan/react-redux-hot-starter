import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
/* eslint-disable no-unused-vars */
import Styles from '../stylesheets/app.sass';
/* eslint-enable no-unused-vars */

import Main from './Main';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

//Loging state;
function log() {
  console.log("%c Current State: -----------------------> ", "color: green");
  console.log(store.getState().general);
  console.log("%c --------------------------------------> ", "color: green");
}
store.subscribe(log);
log();

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}
