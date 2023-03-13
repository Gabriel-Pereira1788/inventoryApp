import React from 'react';
import * as S from 'native-base';
import Animated, {SlideInDown} from 'react-native-reanimated';

//* teste
interface MessageProps {
  sender: 'user' | 'assistant';
  text: string;
}

export default function Message({sender, text}: MessageProps) {
  return (
    <Animated.View entering={SlideInDown.delay(150).duration(220)}>
      <S.HStack
        w="100%"
        py={2}
        alignItems={sender === 'user' ? 'flex-end' : 'flex-start'}
        space={2}
        justifyContent={sender === 'user' ? 'flex-end' : 'flex-start'}>
        <S.Box
          backgroundColor={sender === 'user' ? '#1f1d23' : '#fff'}
          shadow="4"
          p={3}
          borderBottomRightRadius={sender === 'user' ? 2 : 20}
          borderBottomLeftRadius={sender === 'assistant' ? 2 : 20}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}>
          <S.HStack space={2} alignItems="center">
            <S.Text
              fontWeight={'400'}
              maxW={250}
              fontSize="md"
              color={sender === 'user' ? '#cac6c6' : '#6f6f6f'}>
              {text}
            </S.Text>
          </S.HStack>
        </S.Box>
      </S.HStack>
    </Animated.View>
  );
}
