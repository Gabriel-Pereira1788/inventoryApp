import React from 'react';
import * as S from 'native-base';
type Props = {};

export default function Header({}: Props) {
  return (
    <S.HStack
      position="relative"
      top={0}
      width="100%"
      p={10}
      shadow="4"
      borderBottomRadius={35}
      backgroundColor="#28242b"
    />
  );
}
