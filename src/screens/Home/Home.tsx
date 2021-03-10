import React, { useState } from 'react';
import { HomeProps } from '../../navigation/types';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { 
  DefaultTheme,
  Portal, 
  Provider, 
  ActivityIndicator, 
} from 'react-native-paper';
import { styles } from './style';
import { RootState } from '../../redux/reducers/rootReducer';
import { ModalWindow } from '../../components/Modal';
// import { getcompetitions } from '../../components/Modal';
import { LeaguesList } from './components/LeaguesList'
import { SelectButton } from './components/LeaguesButton';

export const HomeScreen = ({ navigation }: HomeProps) => {

  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);

  const loading = useSelector((state: RootState) => state.leaguesReducer.loading);
  // console.log(loading);
  
  // const competitions = useSelector((state: RootState) => state.leaguesReducer.data);
  // const competitions = useSelector(getcompetitions);
  // console.log(competitions);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#028d45',
    },
  };

  return (
    <View style={styles.home_container}>
      <Provider theme={theme}>
        <Portal>
          <ModalWindow visible={visible} hideModal={hideModal} 
            children = 
            {(loading) ?
              <ActivityIndicator 
                animating={loading} 
                color={'#028d45'}
                size={'large'} 
                style={styles.load_indicator} 
              />
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