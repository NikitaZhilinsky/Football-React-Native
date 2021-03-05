import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { HomeScreen } from '../screens/Home/Home';
import { Teams } from '../screens/Teams/Teams';
import { Property } from '../screens/Property/Property';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          title: "Football Stats",
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: "center",
          }, 
        }} 
      />
      <Stack.Screen 
        name="Teams" 
        component={Teams} 
        options={{ 
          title: "Teams",
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
  );
}

export const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content" />
      <StackNavigator />  
    </NavigationContainer>
  )
}