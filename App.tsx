/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store';
import { HomeScreen } from './src/components/Home/Home'
import { ListResult } from './src/components/ListResult/ListResult'
import { Property } from './src/components/Property/Property'

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

type RootStackParamList = {
  HomeScreen: undefined;
  ListResult: undefined;
  Property: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content" />
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ 
              title: "Property Finder",
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            }} 
          />
          <Stack.Screen 
            name="ListResult" 
            component={ListResult} 
            options={{ 
              title: "Results",
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            }} 
          />
          <Stack.Screen 
            name="Property" 
            component={Property} 
            options={{ 
              title: "Property",
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default App;
