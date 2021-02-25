import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { styles } from './style';
import { StackNavigationProp } from '@react-navigation/stack';

type ListResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListResult'
>;

type ResultProps = {
  navigation: ListResultScreenNavigationProp;
};

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