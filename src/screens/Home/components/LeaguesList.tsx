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

  const getLogo = (name: string) => {
    return (name === "Série A") ? require('../../../img/brazil_serie_a.png') :
    (name === "Championship") ? require('../../../img/championship.png') :
    (name === "Premier League") ? require('../../../img/premierl.png') :
    (name === "UEFA Champions League") ? require('../../../img/championsl.png') :
    (name === "European Championship") ? require('../../../img/euro_2020.png') :
    (name === "Ligue 1") ? require('../../../img/ligue_1.png') :
    (name === "Bundesliga") ? require('../../../img/bundesliga.png') :
    (name === "Serie A") ? require('../../../img/serie_a.png') :
    (name === "Eredivisie") ? require('../../../img/eredivisie.png') :
    (name === "Primeira Liga") ? require('../../../img/primeiral.png') :
    (name === "Primera Division") ? require('../../../img/laliga.png') :
    (name === "FIFA World Cup") ? require('../../../img/wc_2018.png') : undefined;
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
            <Image
              style={styles.league_logo}
              source={getLogo(item.name)}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.league_name}>
                {item.name}
              </Text>          
              <Text style={styles.league_area}>
                {item.area.name}
              </Text>   
            </View>       
          </View>
        </TouchableHighlight>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}