import * as S from 'native-base';
import React from 'react';
import {ModalProps} from './view.models';

export default function Modal(props: ModalProps) {
  return (
    <S.Modal
      flex={1}
      animationPreset="slide"
      _light={{backgroundColor: '#fff'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      {...props}>
      {/* <S.Modal.CloseButton /> */}

      {props.children}
    </S.Modal>
  );
}
