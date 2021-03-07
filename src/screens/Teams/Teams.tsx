import React from 'react';
import { TeamsProps } from '../../navigation/types';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { 
  Modal, 
  Portal,
  Provider, 
} from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from './style';
import { RootState } from '../../redux/reducers/rootReducer';
import { watchStandingsData } from '../../redux/actions/standingsActions';
import { Standing } from '../../redux/reducers/standingsReducer';

export const TeamsScreen = ({ navigation }: TeamsProps) => {

  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);

  const teamLoading = useSelector((state: RootState) => state.teamsReducer.loading);
  // console.log(teamLoading);

  const teams = useSelector((state: RootState) => state.teamsReducer.data)
  // console.log(teams);

  const statLoading = useSelector((state: RootState) => state.standingsReducer.loading);
  // console.log(statLoading);

  const standings = useSelector((state: RootState) => state.standingsReducer.data)
  // console.log(standings);

  const teamStat = useSelector((state: RootState) => state.standingsReducer.teamStat)
  // console.log(teamStat);

  const dispatch = useDispatch();

  const getStat = (standings: Standing[], id: number) => {
    dispatch(watchStandingsData(standings, id))
    setVisible(true);
  }
  
  return (
    <View style={styles.result_container}>
      {(teamLoading)
      ?
      <ActivityIndicator 
        animating={teamLoading} 
        color={'red'}
        size={'large'} 
        style={styles.load_indicator} 
      />
      :
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD" 
            onPress={() => getStat(standings, item.id)}            
          >
            <View style={styles.team_cell}>
              {/* <Image
                source={{uri: item.crestUrl}}
              /> */}
              <Text style={styles.team_name}>
                {item.name}
              </Text>                    
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id.toString()}
      />
      }
      <Provider>
        <Portal>
          <Modal 
            visible={visible} 
            onDismiss={hideModal} 
            contentContainerStyle={styles.team_modal}
          >
            {(statLoading)
            ?
            <ActivityIndicator 
              animating={statLoading} 
              color={'red'}
              size={'large'} 
              style={styles.load_indicator} 
            />
            :
            <View>
              <Text>
                Position: {teamStat.position}
              </Text>
              <Text>
                Won: {teamStat.won}
              </Text>
              <Text>
                Lost: {teamStat.lost}
              </Text>
              <Text>
                Draw: {teamStat.draw}
              </Text>
            </View>
            }
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
}