import React from 'react';
import { Modal } from 'react-native-paper';
import { styles } from '../screens/Home/style';

type Props = {
  visible: boolean,
  hideModal: () => void,
  children: any,
}

export const ModalWindow = ( {visible, hideModal, children}: Props ) => {

  return (
    <Modal 
      visible={visible} 
      onDismiss={hideModal} 
      contentContainerStyle={styles.home_modal}>   
      {children}
    </Modal>
  );
}