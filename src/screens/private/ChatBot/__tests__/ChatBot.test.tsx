import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ChatBot from '../View';
import {useChatBot} from '../useViewModel';
import {MessageModel} from '../model';
import {Wrapper} from '../../../../components/JestWrapper';

jest.mock('../useViewModel.ts');

const useChatBotMock = useChatBot as jest.Mock<ReturnType<typeof useChatBot>>;

const mockMessages: MessageModel[] = [
  {sender: 'assistant', text: 'Hello', createdAt: new Date()},
  {sender: 'user', text: 'Hi there', createdAt: new Date()},
  {sender: 'assistant', text: 'How can I assist you?', createdAt: new Date()},
];

const mockSend = jest.fn();

beforeAll(() => {
  useChatBotMock.mockImplementation(() => ({
    messages: mockMessages,
    loadingMessage: false,
    onSend: mockSend,
    error: null,
  }));
});
describe('ChatBot', () => {
  it('renders messages correctly', () => {
    const {getByText} = render(
      <Wrapper>
        <ChatBot />,
      </Wrapper>,
    );

    expect(getByText(mockMessages[0].text!)).toBeTruthy();
    expect(getByText(mockMessages[1].text!)).toBeTruthy();
    expect(getByText(mockMessages[2].text!)).toBeTruthy();
  });

  it('calls onSend when the send button is pressed', () => {
    const {getByTestId} = render(
      <Wrapper>
        <ChatBot />,
      </Wrapper>,
    );
    const sendButton = getByTestId('buttonSend');

    fireEvent.press(sendButton);

    expect(mockSend).toHaveBeenCalled();
  });
});
