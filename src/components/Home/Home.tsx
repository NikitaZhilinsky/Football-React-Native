import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
} from 'react-native';
import { styles } from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { requestApiData } from '../../redux/actions';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

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
        source={require('./src/img/titlehome.jpg')}
        style={{ width: 300, height: 250 }} />
    </View>
  );
}