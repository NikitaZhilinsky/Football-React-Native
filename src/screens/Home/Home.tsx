import React, { useState } from 'react';
import { HomeProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Portal, Provider } from 'react-native-paper';
import { styles, theme } from './style'; 
import { ModalWindow } from '../../components/ModalWindow';
import { LeaguesList } from './components/LeaguesList'
import { SelectButton } from './components/LeaguesButton';
import { LoadIndicator } from '../../components/LoadIndicator';
import { getLeaguesLoading } from '../../redux/selectors';

export const HomeScreen = ({ navigation }: HomeProps) => {

  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);

  const loading = useSelector(getLeaguesLoading);
  // console.log(loading);

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