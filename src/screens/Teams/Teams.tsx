import React from 'react';
import { TeamsProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { 
  Modal, 
  Portal,
  Provider, 
} from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from './style';
import { RootState } from '../../redux/reducers/rootReducer';
import { TeamsList } from './components/TeamsList';
import { TeamsStatistics } from './components/TeamsStatistics';

export const TeamsScreen = ({ navigation }: TeamsProps) => {

  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);

  const teamLoading = useSelector((state: RootState) => state.teamsReducer.loading);
  // console.log(teamLoading);

  const statLoading = useSelector((state: RootState) => state.standingsReducer.loading);
  // console.log(statLoading);
  
  return (
    <View style={styles.result_container}>
      {(teamLoading) ?
        <ActivityIndicator 
          animating={teamLoading} 
          color={'#028d45'}
          size={'large'} 
          style={styles.load_indicator} 
        /> :
        <TeamsList updateVisible={setVisible}/>
      }
      <Provider>
        <Portal>
          <Modal 
            visible={visible} 
            onDismiss={hideModal} 
            contentContainerStyle={styles.team_modal}
          >
            {(statLoading) ?
              <ActivityIndicator 
                animating={statLoading} 
                color={'#028d45'}
                size={'large'} 
                style={styles.load_indicator} 
              /> :
              <TeamsStatistics />
            }
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
}