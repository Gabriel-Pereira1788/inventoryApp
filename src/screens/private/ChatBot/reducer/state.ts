import {MessageModel} from '../model';

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
