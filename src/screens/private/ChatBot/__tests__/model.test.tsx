import axios from 'axios';
import {ChatBot, MessageModel} from '../model';

jest.mock('axios');

const mockedAxios = axios as jest.MockedFunction<typeof axios>;

describe('ChatBot', () => {
  let chatBot: ChatBot;

  beforeEach(() => {
    chatBot = new ChatBot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('connects successfully', async () => {
    const postMessageMock = jest.spyOn(chatBot, 'postMessage');
    mockedAxios.mockResolvedValueOnce({
      data: {
        choices: [{message: {content: 'Hello, user!'}}],
      },
    });

    const result = await chatBot.connect();

    expect(postMessageMock).toHaveBeenCalledWith([chatBot.systemPrompt], 150);
    expect(result).toEqual('Hello, user!');
  });

  it('listens to messages successfully', async () => {
    const postMessageMock = jest.spyOn(chatBot, 'postMessage');
    mockedAxios.mockResolvedValue({
      data: {
        choices: [{message: {content: 'How can I help you?'}}],
      },
    });

    const messages = [new MessageModel({sender: 'user', text: 'Hi there!'})];
    const result = await chatBot.listenResponse(messages);

    expect(postMessageMock).toHaveBeenCalledWith([
      chatBot.systemPrompt,
      {role: 'user', content: 'Hi there!'},
    ]);
    expect(result).toEqual('How can I help you?');
  });
});
