import React from 'react';
import { HomeProps } from '../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { 
  Modal, 
  Portal, 
  Provider, 
  Button, 
  ActivityIndicator 
} from 'react-native-paper';
import { styles } from './style';
import { watchApiData } from '../../redux/actions/selectActions';
import { RootState } from '../../redux/reducers/rootReducer';

export const HomeScreen = ({ navigation }: HomeProps) => {

  const dispatch = useDispatch();

  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);

  const loading = useSelector((state: RootState) => state.selectReducer.loading);
  console.log(loading);
  
  const competitions = useSelector((state: RootState) => state.selectReducer.data);
  // console.log(competitions);

  const selectLeague = () => {
    dispatch(watchApiData());
    setVisible(true);
    // navigation.navigate('ListResult')
  }

  return (
    <View style={styles.home_container}>
      <Provider>
        <Portal>
          <Modal 
            visible={visible} 
            onDismiss={hideModal} 
            contentContainerStyle={styles.home_modal}
          >
            <ActivityIndicator 
              animating={loading} 
              color={'red'}
              size={'large'} 
              style={styles.load_indicator} />
            <FlatList
              data={competitions}
              renderItem={({ item }) => (
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD" 
                  onPress={() => alert("Hello!")}                 
                >
                  <View style={styles.league_cell}>
                    <Text style={styles.league_name}>{item.name}</Text>          
                    <Text style={styles.league_area}>{item.area.name}</Text>          
                  </View>
                </TouchableHighlight>
              )}
              keyExtractor={item => item.id}
            />
          </Modal>
        </Portal>
        <Button style={styles.home_button} onPress={selectLeague}>
          Select a League
        </Button>
      </Provider>
    </View>
  );
}