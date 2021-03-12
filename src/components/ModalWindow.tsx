import React, { ReactNode } from 'react';
import { Modal } from 'react-native-paper';
import { ViewStyle } from 'react-native';

type Props = {
  visible: boolean,
  hideModal: () => void,
  style: ViewStyle,
  children: ReactNode,
}

export const ModalWindow = ( props: Props ) => {

  const { visible, hideModal, style, children } = props;

  return (
    <Modal 
      visible={visible} 
      onDismiss={hideModal} 
      contentContainerStyle={style}>   
      {children}
    </Modal>
  );
}