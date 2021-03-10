import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Portal, Provider } from 'react-native-paper';
import { styles } from './style';
import { RootState } from '../../redux/reducers/rootReducer';
import { ModalWindow } from '../../components/ModalWindow';
import { TeamsList } from './components/TeamsList';
import { TeamsStatistics } from './components/TeamsStatistics';
import { LoadIndicator } from '../../components/LoadIndicator';

export const TeamsScreen = () => {

  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);

  const teamLoading = useSelector((state: RootState) => state.teamsReducer.loading);
  // console.log(teamLoading);

  const statLoading = useSelector((state: RootState) => state.standingsReducer.loading);
  // console.log(statLoading);
  
  return (
    <View style={styles.result_container}>
      {(teamLoading) ?
        <LoadIndicator loading={teamLoading} style={styles.load_indicator} />
        :
        <TeamsList updateVisible={setVisible}/>
      }
      <Provider>
        <Portal>
          <ModalWindow
            visible={visible} 
            hideModal={hideModal}
            style={styles.team_modal}
            children=
            {(statLoading) ?
              <LoadIndicator loading={statLoading} style={styles.load_indicator} />
              :
              <TeamsStatistics />
            }
          />
        </Portal>
      </Provider>
    </View>
  );
}