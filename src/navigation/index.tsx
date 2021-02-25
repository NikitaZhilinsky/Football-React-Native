import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { HomeScreen } from '../components/Home/Home';
import { ListResult } from '../components/ListResult/ListResult';
import { Property } from '../components/Property/Property';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
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