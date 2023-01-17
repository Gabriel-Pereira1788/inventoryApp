import React from 'react';
import * as S from 'native-base';

interface DataProps extends S.IStackProps {
  titleCard: string;
}
export default function DataProducts({titleCard, ...rest}: DataProps) {
  return (
    <S.VStack
      {...rest}
      alignItems="flex-start"
      justifyContent="center"
      space={1}>
      <S.Text bold fontSize="lg" color="#737171" textAlign="left">
        {titleCard}
      </S.Text>
      <S.Text bold fontSize={50} textAlign="left">
        197
      </S.Text>
    </S.VStack>
  );
}
