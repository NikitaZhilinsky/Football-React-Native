import React from 'react';
import { HomeProps } from '../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { 
  Modal, 
  Portal, 
  Provider, 
  Button, 
  ActivityIndicator 
} from 'react-native-paper';
import { styles } from './style';
import { watchLeaguesData } from '../../redux/actions/leaguesActions';
import { watchTeamsData } from '../../redux/actions/teamsActions';
import { RootState } from '../../redux/reducers/rootReducer';

export const HomeScreen = ({ navigation }: HomeProps) => {

  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);

  const loading = useSelector((state: RootState) => state.leaguesReducer.loading);
  // console.log(loading);
  
  const competitions = useSelector((state: RootState) => state.leaguesReducer.data);
  // console.log(competitions);

  const dispatch = useDispatch();

  const selectLeague = () => {
    dispatch(watchLeaguesData());
    setVisible(true);
  }
  const getTeams = (id: number) => {
    dispatch(watchTeamsData(id));
    navigation.navigate('TeamsScreen');
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
            {(loading) 
            ?
            <ActivityIndicator 
              animating={loading} 
              color={'red'}
              size={'large'} 
              style={styles.load_indicator} 
            />
            :
            <FlatList
              data={competitions}
              renderItem={({ item }) => (
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"                 
                  onPress={() => getTeams(item.id)}                 
                >
                  <View style={styles.league_cell}>
                    <Text style={styles.league_name}>
                      {item.name}
                    </Text>          
                    <Text style={styles.league_area}>
                      {item.area.name}
                    </Text>          
                  </View>
                </TouchableHighlight>
              )}
              keyExtractor={item => item.id.toString()}
            />
            }
          </Modal>
        </Portal>
        <Button style={styles.home_button} onPress={selectLeague}>
          <Text style={styles.button_title}>
            Select a League
          </Text>
        </Button>
      </Provider>
    </View>
  );
}