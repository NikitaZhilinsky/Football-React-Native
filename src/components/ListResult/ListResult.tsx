import React from 'react';
import { ResultProps } from '../../navigation/types';
import {
  View,
  Text,
  Button
} from 'react-native';
import { styles } from './style';

export const ListResult = ({ navigation }: ResultProps) => {

  // const data = useSelector(state => state)
  
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