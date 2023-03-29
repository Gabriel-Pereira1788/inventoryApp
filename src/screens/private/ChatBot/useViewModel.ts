import {GPT_KEY} from '@env';
import {useCallback, useEffect, useReducer} from 'react';

import {ChatBot, MessageModel} from './model';

export type State = {
  messages: MessageModel[];
  loadingMessage: boolean;
  error: any;
};

export const initialState: State = {
  messages: [],
  loadingMessage: false,
  error: null,
};

export const assistantBot = new ChatBot();
export function useChatBot() {
  const [state, updatedStates] = useReducer(
    (current: State, updated: Partial<State>) => ({
      ...current,
      ...updated,
    }),
    initialState,
  );

  const createMessage = useCallback(
    (message: MessageModel) => {
      updatedStates({
        messages: [...state.messages, message],
      });
    },
    [state.messages],
  );

  function onSend(messageText: string) {
    const newMessage = new MessageModel({sender: 'user', text: messageText});

    createMessage(newMessage);
  }

  const listenResponse = useCallback(async () => {
    const response = await assistantBot.listenResponse(state.messages);
    if (response) {
      const newMessage = new MessageModel({
        sender: 'assistant',
        text: response,
      });
      createMessage(newMessage);
    }
  }, [state.messages, createMessage]);

  const onConnect = useCallback(async () => {
    const response = await assistantBot.connect();
    if (response) {
      const newMessage = new MessageModel({
        sender: 'assistant',
        text: response,
      });

      createMessage(newMessage);
    }
  }, [createMessage]);

  useEffect(() => {
    const lengthList = state.messages.length;
    if (lengthList > 0 && state.messages[lengthList - 1].sender === 'user') {
      listenResponse();
    }
  }, [state.messages, listenResponse]);

  useEffect(() => {
    onConnect();
  }, [onConnect]);

  return {...state, onSend};
}
