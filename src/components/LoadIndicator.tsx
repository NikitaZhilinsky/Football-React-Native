import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { ViewStyle } from 'react-native';

type Props = {
  loading: boolean,
  style: ViewStyle,
}

export const LoadIndicator = ( {loading, style}: Props ) => {

  return (
    <ActivityIndicator 
      animating={loading} 
      color={'#028d45'}
      size={'large'} 
      style={style} 
    />
  );
}

