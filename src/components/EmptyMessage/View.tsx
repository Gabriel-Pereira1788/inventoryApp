import React from 'react';
import * as S from 'native-base';
<<<<<<< HEAD
import {EmptyProps} from './view.models';
=======

import {ReactNode} from 'react';

export interface EmptyProps {
  message: string;
  children?: ReactNode;
}
>>>>>>> development

export default function EmptyMessage({message, children}: EmptyProps) {
  return (
    <S.VStack w="100%" alignItems="center" justifyContent="center" space={3}>
      <S.Text
        p={3}
        bold
        _light={{color: 'text.100'}}
        _dark={{color: '#fff'}}
        fontSize="md"
        textAlign="left">
        {message}
      </S.Text>
      <S.Box opacity={0.6}>{children && children}</S.Box>
    </S.VStack>
  );
}
