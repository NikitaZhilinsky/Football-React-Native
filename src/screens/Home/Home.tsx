import React from 'react';
import { HomeProps } from '../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { 
  Modal, 
  Portal, 
  Provider, 
  Button, 
  ActivityIndicator 
} from 'react-native-paper';
import { styles } from './style';
import { watchApiData } from '../../redux/actions/searchActions';
import { RootState } from '../../redux/reducers/rootReducer';

export const HomeScreen = ({ navigation }: HomeProps) => {

  const dispatch = useDispatch();

  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);

  const loading = useSelector((state: RootState) => state.searchReducer.loading);
  const competitions = useSelector((state: RootState) => state.searchReducer.data);
  // console.log(competitions);

  const startSearch = () => {
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
            contentContainerStyle={styles.modal}
          >
            <ActivityIndicator animating={loading} color={'red'} />
            <FlatList
              data={competitions}
              renderItem={({ item }) => (
                <View>
                  <Image 
                    style={styles.logo}
                    source={{
                      uri: `${item.emblemUrl}`,
                    }}
                  />
                  <Text>{item.name}</Text>          
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </Modal>
        </Portal>
        <Button style={styles.button} onPress={startSearch}>
          Select a Leage
        </Button>
      </Provider>
    </View>
  );
}