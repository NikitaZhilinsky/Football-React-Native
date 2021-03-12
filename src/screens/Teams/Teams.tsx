import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Portal, Provider } from 'react-native-paper';
import { styles } from './style';
import { ModalWindow } from '../../components/ModalWindow';
import { TeamsList } from './components/TeamsList';
import { TeamsStatistics } from './components/TeamsStatistics';
import { LoadIndicator } from '../../components/LoadIndicator';
import { getStatLoading, getTeamsLoading } from '../../redux/selectors';

export const TeamsScreen = () => {

  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);

  const [svgURI, setSvgURI] = useState("");

  const teamLoading = useSelector(getTeamsLoading);
  // console.log(teamLoading);

  const statLoading = useSelector(getStatLoading);
  // console.log(statLoading);
  
  return (
    <View style={styles.result_container}>
      {(teamLoading) ?
        <LoadIndicator loading={teamLoading} style={styles.load_indicator} />
        :
        <TeamsList updateVisible={setVisible} updateURI={setSvgURI} />
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
              <TeamsStatistics svgURI={svgURI} />
            }
          />
        </Portal>
      </Provider>
    </View>
  );
}