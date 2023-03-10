import React from 'react';
import * as S from 'native-base';
import {TouchableOpacity} from 'react-native';
import {PaperPlaneRight} from 'phosphor-react-native';
interface SendMessageProps {}

export default function SendMessage({}: SendMessageProps) {
  return (
    <S.HStack
      position="absolute"
      bottom={0}
      width="100%"
      borderTopRadius={35}
      p={6}
      shadow="4"
      backgroundColor="#28242b"
      justifyContent="space-between">
      <S.Input
        borderWidth={0}
        placeholder="Digite aqui..."
        fontSize="md"
        w="3/4"
        color="#fff"
        backgroundColor="transparent"
      />
      <S.Box alignItems="center" justifyContent="center">
        <TouchableOpacity>
          <PaperPlaneRight size={32} color="#f4f7f3" weight="thin" />
        </TouchableOpacity>
      </S.Box>
    </S.HStack>
  );
}
