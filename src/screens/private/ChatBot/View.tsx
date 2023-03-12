import React from 'react';
import * as S from 'native-base';
import SendMessage from './components/SendMessage/View';
import Message from './components/Message/View';
import {useChatBot} from './useViewModel';
import {FlatList} from 'native-base';
import {RenderIF} from '../../../components/RenderIF/View';
interface ChatBotProps {}

export default function ChatBot({}: ChatBotProps) {
  const {messages, onSend} = useChatBot();
  return (
    <S.Box
      flex={1}
      position="relative"
      backgroundColor="#ddd"
      alignItems="center"
      justifyContent="space-between">
      {/* <Header /> */}
      <S.HStack width="100%" my={2} alignItems="center" justifyContent="center">
        <S.Text color="#8d8b8b" bold fontSize="xl">
          Synth.IA
        </S.Text>
      </S.HStack>

      <RenderIF condition={messages && messages.length > 0}>
        <FlatList
          flex={1}
          width="100%"
          contentContainerStyle={{
            padding: 10,
          }}
          data={messages}
          renderItem={({item}) => (
            <Message sender={item.sender!} text={item.text!} />
          )}
        />
      </RenderIF>

      <SendMessage onSend={onSend} />
    </S.Box>
  );
}
