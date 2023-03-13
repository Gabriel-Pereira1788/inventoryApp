import React from 'react';
import * as S from 'native-base';
import SendMessage from './components/SendMessage/View';
import Message from './components/Message/View';
import {useChatBot} from './useViewModel';
import {FlatList} from 'native-base';
interface ChatBotProps {}

export default function ChatBot({}: ChatBotProps) {
  const {messages, onSend} = useChatBot();
  return (
    <S.VStack
      flex={1}
      position="relative"
      backgroundColor="#ddd"
      alignItems="center"
      justifyContent="flex-start">
      {/* <Header /> */}
      <S.HStack width="100%" my={2} alignItems="center" justifyContent="center">
        <S.Text color="#8d8b8b" bold fontSize="xl">
          Synth.IA
        </S.Text>
      </S.HStack>

      <FlatList
        inverted
        flex={1}
        width="100%"
        nestedScrollEnabled
        contentContainerStyle={{
          flexDirection: 'column-reverse',
          padding: 10,
        }}
        data={messages}
        renderItem={({item}) => (
          <Message sender={item.sender!} text={item.text!} />
        )}
      />

      <SendMessage onSend={onSend} />
    </S.VStack>
  );
}
