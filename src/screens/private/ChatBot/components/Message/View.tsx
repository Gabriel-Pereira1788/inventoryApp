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
    <Animated.View entering={SlideInDown.delay(150).duration(150)}>
      <S.HStack
        w="100%"
        py={2}
        alignItems={sender === 'user' ? 'flex-end' : 'flex-start'}
        space={2}
        justifyContent={sender === 'user' ? 'flex-end' : 'flex-start'}>
        {/* <RenderIF condition={sender === 'assistant'}>
        <S.Circle
          p={2}
          backgroundColor="#4b4848"
          position="relative"
          top={-25}
          alignItems="center"
          justifyContent="center">
          <IconSVG Icon={IconBot} size="md" />
        </S.Circle>
      </RenderIF> */}

        <S.Box
          backgroundColor={sender === 'user' ? '#1f1d23' : '#fff'}
          shadow="4"
          p={3}
          borderBottomRightRadius={sender === 'user' ? 2 : 20}
          borderBottomLeftRadius={20}
          borderTopRightRadius={20}
          borderTopLeftRadius={sender === 'user' ? 20 : 2}>
          <S.HStack space={2} alignItems="center">
            <S.Text
              fontWeight={'medium'}
              maxW={250}
              fontSize="md"
              color={sender === 'user' ? '#cac6c6' : '#6f6f6f'}>
              {text}
            </S.Text>
          </S.HStack>
        </S.Box>

        {/* <RenderIF condition={!!senderImg}>
        <S.Box position="relative" bottom={-25}>
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
      </RenderIF> */}
      </S.HStack>
    </Animated.View>
  );
}
