import * as S from 'native-base';
import React from 'react';

interface Props extends S.IModalProps {}

export default function Modal(props: Props) {
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
