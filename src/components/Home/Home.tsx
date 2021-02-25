import React from 'react';
import { HomeProps } from '../../navigation/types';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';
import { styles } from './style';

import { requestApiData } from '../../redux/actions/searchActions';

export const HomeScreen = ({ navigation }: HomeProps) => {

  const dispatch = useDispatch();

  const startSearch = () => {
    dispatch(requestApiData())
    navigation.navigate('ListResult')
  }

  return (
    <View style={styles.home_container}>
      <Text style={styles.home_text}>Search for houses to buy!</Text>
      <Text style={styles.home_text}>Search by place-name or postcode.</Text>
      <View style={styles.home_search}>
        <TextInput
          style={styles.home_input}
          placeholder={'Enter the city or code'}
        />
        <Button
          title="Go"
          // onPress={() => navigation.navigate('ListResult')}
          onPress={startSearch}
        />
      </View>
      <Image 
        source={require('../../img/titlehome.jpg')}
        style={styles.home_image} />
    </View>
  );
}