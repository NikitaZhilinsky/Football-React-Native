import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { AppNavigationContainer } from './src/navigation/index';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
}

export default App;
