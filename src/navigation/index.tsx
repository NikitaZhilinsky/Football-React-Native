import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { HomeScreen } from '../screens/Home/Home';
import { TeamsScreen } from '../screens/Teams/Teams';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          title: "Football Stats",
          headerStyle: {
            backgroundColor: "#028d45",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
          }, 
        }} 
      />
      <Stack.Screen 
        name="TeamsScreen" 
        component={TeamsScreen} 
        options={{ 
          title: "Teams",
          headerTitleStyle: {
            color: "#028d45",
            fontWeight: "bold",
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
        barStyle="light-content"
        backgroundColor="#028d45" />
      <StackNavigator />  
    </NavigationContainer>
  )
}