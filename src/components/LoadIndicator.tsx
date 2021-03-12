import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { ViewStyle } from 'react-native';

type Props = {
  loading: boolean,
  style: ViewStyle,
}

export const LoadIndicator = ( props: Props ) => {

  const { loading, style } = props;

  return (
    <ActivityIndicator 
      animating={loading} 
      color={'#028d45'}
      size={'large'} 
      style={style} 
    />
  );
}

