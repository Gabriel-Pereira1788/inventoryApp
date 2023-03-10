import React from 'react';
import * as S from 'native-base';
import Header from './components/Header/View';
import SendMessage from './components/SendMessage/View';
import Message from './components/Message/View';
import {useUser} from '../../../store/useUser';
interface ChatBotProps {}

export default function ChatBot({}: ChatBotProps) {
  const user = useUser();
  return (
    <S.Box
      flex={1}
      position="relative"
      backgroundColor="backgroundLight"
      alignItems="center"
      justifyContent="center">
      <Header />
      <S.Box p={4} flex={1} justifyContent="flex-start">
        <Message sender="user" senderImg={user?.photoURL || ''} />
        <Message sender="assistant" />
      </S.Box>
      <SendMessage />
    </S.Box>
  );
}
