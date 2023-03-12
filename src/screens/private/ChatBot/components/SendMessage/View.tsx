import React from 'react';
import * as S from 'native-base';
import {TouchableOpacity} from 'react-native';
import {PaperPlaneRight} from 'phosphor-react-native';
import Animated from 'react-native-reanimated';
import {useSendMessage} from './useViewModel';

export interface SendMessageProps {
  onSend: (messageText: string) => void;
}

export default function SendMessage({onSend}: SendMessageProps) {
  const {pressed, animatedStyle, message, handleChange, handleSend} =
    useSendMessage({onSend});
  return (
    <S.HStack
      position="relative"
      bottom={0}
      width="95%"
      borderRadius={15}
      m={2}
      p={3}
      shadow="5"
      backgroundColor="#1f1d23"
      justifyContent="space-between">
      <S.Input
        borderWidth={0}
        placeholder="Digite aqui..."
        placeholderTextColor="#ddd"
        value={message}
        onChangeText={handleChange}
        fontSize="md"
        w="3/4"
        color="#000"
        backgroundColor="transparent"
      />
      <S.Box alignItems="center" justifyContent="center">
        <TouchableOpacity
          onPress={handleSend}
          onPressIn={() => (pressed.value = true)}
          onPressOut={() => (pressed.value = false)}>
          <Animated.View style={animatedStyle}>
            <PaperPlaneRight size={32} color="#ddd" weight="thin" />
          </Animated.View>
        </TouchableOpacity>
      </S.Box>
    </S.HStack>
  );
}
