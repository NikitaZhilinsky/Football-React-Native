import React, { Dispatch, SetStateAction } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../style';
import { useDispatch } from 'react-redux';
import { watchLeaguesData } from '../../../redux/actions/leaguesActions';


type Props = {
  updateVisible: (visible: boolean) => void, 
}

export const SelectButton = ( {updateVisible}: Props ) => {

  const dispatch = useDispatch();

  const selectLeague = () => {
    dispatch(watchLeaguesData());
    updateVisible(true);
  };

  return (
    <Button style={styles.home_button} onPress={selectLeague}>
      <Text style={styles.button_title}>
        Select a League
      </Text>
    </Button>
  );
}