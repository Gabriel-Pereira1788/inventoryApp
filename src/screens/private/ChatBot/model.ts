import {Message} from '../../../models/Chat';
import axios, {AxiosError} from 'axios';
import {GPT_KEY, PROMPT_INITIAL} from '@env';
import queryClient from '../../../services/config/queryClient';
import {User} from '../../../models/Auth';

export class MessageModel implements Message {
  createdAt: Date = new Date();
  text?: string;
  sender?: 'assistant' | 'user';
  constructor(props: Omit<Message, 'createdAt'>) {
    Object.assign(this, props);
  }
}

type ApiMessage = {
  role: string;
  content: string;
};
export class ChatBot {
  private user?: User = queryClient.getQueryData(['user']);
  systemPrompt: ApiMessage = {
    role: 'system',
    content: PROMPT_INITIAL + ` The name of user is ${this.user?.name}`,
  };

  private normalizeMessages(messages: MessageModel[]): ApiMessage[] {
    return messages.map(message => ({
      role: message.sender!,
      content: message.text!,
    }));
  }

  async connect() {
    const payloadMessages = [this.systemPrompt];

    return await this.postMessage(payloadMessages, 150);
  }
  async listenResponse(messages: MessageModel[]) {
    const messagesApi = this.normalizeMessages(messages);

    const payloadMessages = [this.systemPrompt, ...messagesApi];

    return await this.postMessage(payloadMessages);
  }

  async postMessage(
    messages: ApiMessage[],
    tokens?: number,
  ): Promise<string | undefined | null> {
    const body = {
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.3,
      max_tokens: tokens || 150,
    };

    try {
      const {data} = await axios({
        url: 'https://api.openai.com/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GPT_KEY}`,
        },
        data: JSON.stringify(body),
      });

      return data.choices[0].message.content as string;
    } catch (error) {
      const Error = error as AxiosError;

      return null;
    }
  }
}
