import * as S from 'native-base';
import React from 'react';
import {IModalProps} from 'native-base';

export interface ModalProps extends IModalProps {}

export default function Modal(props: ModalProps) {
  return (
    <S.Modal
      flex={1}
      testID="modal"
      animationPreset="slide"
      _light={{backgroundColor: '#fff'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      {...props}>
      {/* <S.Modal.CloseButton /> */}

      {props.children}
    </S.Modal>
  );
}
