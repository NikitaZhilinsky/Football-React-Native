import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { styles } from '../style';
import { useDispatch, useSelector } from 'react-redux';
import { watchStandingsData } from '../../../redux/actions/standingsActions';
import { Standing } from '../../../redux/reducers/standingsReducer';
import { getStandings, getTeams } from '../../../redux/selectors';

type Props = {
  updateVisible: (visible: boolean) => void, 
  updateURI: (svgURI: string) => void,
}

export const TeamsList = ( {updateVisible, updateURI}: Props ) => {

  const teams = useSelector(getTeams)
  // console.log(teams);

  const standings = useSelector(getStandings)
  // console.log(standings);

  const dispatch = useDispatch();

  const getStat = (standings: Standing[], id: number, Url: string) => {
    dispatch(watchStandingsData(standings, id))
    updateVisible(true);
    updateURI(Url);
  }
  
  return (
    <FlatList
      data={teams}
      renderItem={({ item }) => (
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD" 
          onPress={() => getStat(standings, item.id, item.crestUrl)}            
        >
          <View style={styles.team_cell}>
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