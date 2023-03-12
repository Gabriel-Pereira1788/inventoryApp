import {Message} from '../../../models/Chat';
import axios from 'axios';
import {GPT_KEY} from '@env';
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
  private systemPrompt: ApiMessage = {
    role: 'system',
    content:
      'You are a artificial intelligence named Synthia, your job is to give tips on managing an inventory,start by introducing yourself  response all in portuguese , detect the language that the user is writing and reply with that same language andafter introducing yourself, wait for the user response      .   Your answers must not exceed the available token which is 150',
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
  ): Promise<string | undefined> {
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
      console.log('error-bot', error);
    }
  }
}
