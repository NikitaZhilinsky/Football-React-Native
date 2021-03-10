import React, { useState } from 'react';
import { HomeProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Portal, Provider } from 'react-native-paper';
import { styles, theme } from './style'; 
import { RootState } from '../../redux/reducers/rootReducer';
import { ModalWindow } from '../../components/ModalWindow';
// import { getcompetitions } from '../../components/Modal';
import { LeaguesList } from './components/LeaguesList'
import { SelectButton } from './components/LeaguesButton';
import { LoadIndicator } from '../../components/LoadIndicator';

export const HomeScreen = ({ navigation }: HomeProps) => {

  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);

  const loading = useSelector((state: RootState) => state.leaguesReducer.loading);
  // console.log(loading);
  
  // const competitions = useSelector((state: RootState) => state.leaguesReducer.data);
  // const competitions = useSelector(getcompetitions);
  // console.log(competitions);

  return (
    <View style={styles.home_container}>
      <Provider theme={theme}>
        <Portal>
          <ModalWindow 
            visible={visible} 
            hideModal={hideModal}
            style={styles.home_modal} 
            children = 
            {(loading) ?
              <LoadIndicator loading={loading} style={styles.load_indicator} />
              :
              <LeaguesList navigation={navigation}/>
            }
          />
        </Portal>
        <SelectButton updateVisible={setVisible}/>
      </Provider>
    </View>
  );
}