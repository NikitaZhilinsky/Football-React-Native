import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { styles } from '../style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
import { watchStandingsData } from '../../../redux/actions/standingsActions';
import { Standing } from '../../../redux/reducers/standingsReducer';

type Props = {
  updateVisible: (visible: boolean) => void, 
}

export const TeamsList = ( {updateVisible}: Props ) => {

  const teams = useSelector((state: RootState) => state.teamsReducer.data)
  // console.log(teams);

  const standings = useSelector((state: RootState) => state.standingsReducer.data)
  // console.log(standings);

  const dispatch = useDispatch();

  const getStat = (standings: Standing[], id: number) => {
    dispatch(watchStandingsData(standings, id))
    updateVisible(true);
  }
  
  
  return (
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
  );
}