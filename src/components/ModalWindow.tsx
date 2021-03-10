import React from 'react';
import { Modal } from 'react-native-paper';
import { ViewStyle } from 'react-native';

type Props = {
  visible: boolean,
  hideModal: () => void,
  style: ViewStyle,
  children: any,
}

export const ModalWindow = ( {visible, hideModal, style, children}: Props ) => {

  return (
    <Modal 
      visible={visible} 
      onDismiss={hideModal} 
      contentContainerStyle={style}>   
      {children}
    </Modal>
  );
}