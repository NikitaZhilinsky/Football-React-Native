import React from 'react';
import { View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { styles } from '../style';
import { useSelector } from 'react-redux';
import { getTeamStatistics } from '../../../redux/selectors';

type Props = {
  svgURI: string,
}

export const TeamsStatistics = ( {svgURI}: Props ) => {

  const teamStat = useSelector(getTeamStatistics)
  // console.log(teamStat);

  return (
    <View style={styles.team_statistics}>
      <View style={styles.team_logo}>
        <SvgUri
          width="150"
          height="150"
          uri={svgURI}
        />
      </View>
      <Text style={styles.team_statistics_title}>
        Position: 
        <Text style={styles.team_statistics_value}> {teamStat.position}</Text>
      </Text>
      <Text style={styles.team_statistics_title}>
        Points: 
        <Text style={styles.team_statistics_value}> {teamStat.points}</Text>
      </Text>
      <Text style={styles.team_statistics_title}>
        Played Games: 
        <Text style={styles.team_statistics_value}> {teamStat.playedGames}</Text>
      </Text>
      <View style={styles.team_statistics_games}>
        <Text style={styles.team_statistics_won}>
          Won: 
          <Text style={styles.team_statistics_value}> {teamStat.won}</Text>
        </Text>
        <Text style={styles.team_statistics_lost}>
          Lost: 
          <Text style={styles.team_statistics_value}> {teamStat.lost}</Text>
        </Text>
        <Text style={styles.team_statistics_draw}>
          Draw: 
          <Text style={styles.team_statistics_value}> {teamStat.draw}</Text>
        </Text>
      </View>
    </View> 
  );
}