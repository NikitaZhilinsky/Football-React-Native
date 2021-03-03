import React from 'react';
import { ResultProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { styles } from './style';
import { RootState } from '../../redux/reducers/rootReducer';

export const ListResult = ({ navigation }: ResultProps) => {

  const loading = useSelector((state: RootState) => state.leaguesReducer.loading);
  // console.log(loading);

  const teams = useSelector((state: RootState) => state.teamsReducer.data)
  // console.log(teams);
  
  return (
    <View style={styles.result_container}>
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"             
          >
            <View style={styles.team_cell}>
              <Text style={styles.team_name}>{item.name}</Text>          
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}