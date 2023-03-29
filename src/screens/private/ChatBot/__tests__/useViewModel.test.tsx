import {renderHook, act, waitFor} from '@testing-library/react-native';
import {assistantBot, useChatBot} from '../useViewModel';
import {ChatBot, MessageModel} from '../model';

const mockConnect = jest.fn().mockResolvedValue('hello');
const mockListenResponse = jest.fn();

const mockChatBot = assistantBot as jest.MockedFunction<
  ReturnType<typeof assistantBot>
>;

mockChatBot.mockImplementation(() => new ChatBot());

jest.mock('../model', () => ({
  ChatBot: jest.fn().mockImplementation(() => ({
    connect: mockConnect,
    listenResponse: mockListenResponse,
  })),
  MessageModel: jest.fn().mockImplementation(() => ({
    sender: '',
    text: '',
  })),
}));

describe('useChatBot', () => {
  it('should connect to chatbot on mount', async () => {
    renderHook(() => useChatBot());

    expect(ChatBot).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(mockConnect).toHaveBeenCalled());
    expect(MessageModel).toHaveBeenCalledTimes(1);
  });

  it('should send a message', () => {
    const {result} = renderHook(() => useChatBot());

    act(() => {
      result.current.onSend('Hello, chatbot!');
    });

    expect(result.current.messages).toHaveLength(1);
    expect(MessageModel).toHaveBeenCalledTimes(1);
  });

  it('should listen for a response', async () => {
    const {result} = renderHook(() => useChatBot());

    act(() => {
      result.current.onSend('Hello, chatbot!');
    });

    expect(mockListenResponse).toHaveBeenCalledTimes(1);
    expect(MessageModel).toHaveBeenCalledTimes(2);
  });
});
