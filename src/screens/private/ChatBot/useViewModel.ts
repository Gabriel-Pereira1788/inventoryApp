import {GPT_KEY} from '@env';
import {useCallback, useEffect, useReducer} from 'react';

import {ChatBot, MessageModel} from './model';
import {reducer} from './reducer/reducer';
import {initialState} from './reducer/state';

const assistantBot = new ChatBot();
export function useChatBot() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onSend(messageText: string) {
    const newMessage = new MessageModel({sender: 'user', text: messageText});
    dispatch({type: 'create_message', payload: newMessage});
  }

  const listenResponse = useCallback(async () => {
    const response = await assistantBot.listenResponse(state.messages);
    if (response) {
      const newMessage = new MessageModel({
        sender: 'assistant',
        text: response,
      });

      dispatch({type: 'create_message', payload: newMessage});
    }
  }, [state.messages]);

  const onConnect = useCallback(async () => {
    console.log('gpt-key', GPT_KEY);
    const response = await assistantBot.connect();
    if (response) {
      const newMessage = new MessageModel({
        sender: 'assistant',
        text: response,
      });

      dispatch({type: 'create_message', payload: newMessage});
    }
  }, []);

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
