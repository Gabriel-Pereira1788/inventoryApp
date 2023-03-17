import React from 'react';
import * as S from 'native-base';

import {ReactNode} from 'react';

export interface EmptyProps {
  message: string;
  children?: ReactNode;
}

export default function EmptyMessage({message, children}: EmptyProps) {
  return (
    <S.VStack w="100%" alignItems="center" justifyContent="center" space={3}>
      <S.Text
        p={3}
        fontWeight="400"
        color="#102f3b"
        fontSize="md"
        textAlign="left">
        {message}
      </S.Text>
      <S.Box opacity={0.6}>{children && children}</S.Box>
    </S.VStack>
  );
}
