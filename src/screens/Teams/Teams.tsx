import React from 'react';
import { ResultProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from './style';
import { RootState } from '../../redux/reducers/rootReducer';

export const Teams = ({ navigation }: ResultProps) => {

  const loading = useSelector((state: RootState) => state.teamsReducer.loading);
  // console.log(loading);

  const teams = useSelector((state: RootState) => state.teamsReducer.data)
  // console.log(teams);

  const stand = useSelector((state: RootState) => state.standingsReducer.data)
  console.log(stand);
  
  return (
    <View style={styles.result_container}>
      {(loading)
      ?
      <ActivityIndicator 
        animating={loading} 
        color={'red'}
        size={'large'} 
        style={styles.load_indicator} />
      :
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"             
          >
            <View style={styles.team_cell}>
              {/* <Image
                source={{uri: item.crestUrl}}
              /> */}
              <Text style={styles.team_name}>{item.name}</Text>                    
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id.toString()}
      />}
    </View>
  );
}