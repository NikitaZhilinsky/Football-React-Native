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
import { watchTeamsData } from '../../../redux/actions/teamsActions';
import { HomeProps } from '../../../navigation/types';
import { getCompetitions } from '../../../redux/selectors';

export const LeaguesList = ({ navigation }: HomeProps) => {

  const competitions = useSelector(getCompetitions);
  // console.log(competitions);

  const dispatch = useDispatch();

  const getTeams = (id: number) => {
    dispatch(watchTeamsData(id));
    navigation.navigate('TeamsScreen');
  };

  return (
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
  );
}