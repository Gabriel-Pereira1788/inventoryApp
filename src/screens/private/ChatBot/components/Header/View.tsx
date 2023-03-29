import React from 'react';
import * as S from 'native-base';
import {IconSVG} from '../../../../../components/IconSVG/View';
import IconBot from '../../../../../assets/images/botI.svg';
type Props = {};

export default function Header({}: Props) {
  return (
    <S.HStack
      position="relative"
      top={0}
      width="100%"
      p={5}
      shadow="4"
      borderBottomRadius={35}
      backgroundColor="#28242b"
      alignItems="center"
      justifyContent="center">
      <S.HStack space={3} alignItems="center">
        <IconSVG testID="iconBot" size="lg" Icon={IconBot} />
        <S.Text color="#b1b0b0" bold fontSize="md">
          assistente virtual
        </S.Text>
      </S.HStack>
    </S.HStack>
  );
}
