import {MessageModel} from '../model';
import {State} from './state';

type Actions = {type: 'create_message'; payload: MessageModel};

export function reducer(state: State, action: Actions) {
  switch (action.type) {
    case 'create_message':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
  }
}
