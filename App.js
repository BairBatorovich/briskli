import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import { Provider } from 'react-redux';

import rootReducer from './store/rootReducer';
const store = createStore(rootReducer);
import Appcontainer from './navigation/navigation';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export default function App() {
  return (
    <Provider store={store}>
      <Appcontainer/>
    </Provider>
  );
}
