import React from 'react';
import * as S from 'native-base';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RenderIF} from '../../../../../components/RenderIF/View';

interface MessageProps {
  sender: 'user' | 'assistant';
  senderImg?: string;
}

export default function Message({sender, senderImg}: MessageProps) {
  return (
    <S.HStack
      w="100%"
      py={2}
      alignItems={sender === 'user' ? 'flex-end' : 'flex-start'}
      space={2}
      justifyContent={sender === 'user' ? 'flex-end' : 'flex-start'}>
      <RenderIF condition={sender === 'assistant'}>
        <S.Circle
          p={2}
          backgroundColor="#7c7c7c"
          position="relative"
          top={-20}
          alignItems="center"
          justifyContent="center">
          <MaterialCommunityIcon name="robot" size={30} color="#fff" />
        </S.Circle>
      </RenderIF>

      <S.Box
        backgroundColor={sender === 'user' ? 'primary.300' : '#737272'}
        shadow="4"
        p={3}
        borderBottomRightRadius={sender === 'user' ? 2 : 30}
        borderBottomLeftRadius={30}
        borderTopRightRadius={30}
        borderTopLeftRadius={sender === 'user' ? 30 : 2}>
        <S.HStack space={2} alignItems="center">
          <S.Text
            bold
            maxW={170}
            fontSize="md"
            color={sender === 'user' ? '#6f6f6f' : '#ddd'}>
            teste teste teste teste teste teste teste teste teste teste teste
            teste teste teste
          </S.Text>
        </S.HStack>
      </S.Box>

      <RenderIF condition={!!senderImg}>
        <S.Box position="relative" bottom={-20}>
          <S.Image
            width={42}
            height={42}
            rounded="full"
            alt="imageuser"
            source={{
              uri: senderImg,
            }}
          />
        </S.Box>
      </RenderIF>
    </S.HStack>
  );
}
