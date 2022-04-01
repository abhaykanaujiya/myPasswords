/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import {name as appName} from './app.json';
import reducers from './src/reducers';
const store = createStore(reducers, {}, applyMiddleware(thunk));
const appRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);
