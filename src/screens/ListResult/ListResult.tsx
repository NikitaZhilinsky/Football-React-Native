import React from 'react';
import { ResultProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  Button
} from 'react-native';
import { styles } from './style';

export const ListResult = ({ navigation }: ResultProps) => {

  const data = useSelector(state => state)
  console.log(data);
  
  
  return (
    <View style={styles.results_container}>
      <Text>ListResult</Text>
      <Button
        title="Go"
        onPress={() => navigation.navigate('Property')}
      />
    </View>
  );
}