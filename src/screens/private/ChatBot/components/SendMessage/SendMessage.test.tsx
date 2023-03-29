import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Wrapper} from '../../../../../components/JestWrapper';
import SendMessage from './View';
import {useSendMessage} from './useViewModel';

const onSendMock = jest.fn();
const handleChangeMock = jest.fn();
const handleSendMock = jest.fn();

const value = false;

const useSendMessageMock = useSendMessage as jest.Mock<any>;

jest.mock('./useViewModel');

beforeAll(() => {
  useSendMessageMock.mockImplementation(() => ({
    animatedStyle: {
      transform: [
        {
          scale: 1,
        },
      ],
    },
    handleChange: handleChangeMock,
    handleSend: handleSendMock,
    message: 'teste',
    pressed: value,
  }));
});

describe('SendMessage', () => {
  it('render component correctly', () => {
    const {getByTestId} = render(
      <Wrapper>
        <SendMessage onSend={onSendMock} />
      </Wrapper>,
    );

    expect(getByTestId('inputMessage')).toBeTruthy();
    expect(getByTestId('buttonSend')).toBeTruthy();
  });

  it('change input text', () => {
    const {getByTestId} = render(
      <Wrapper>
        <SendMessage onSend={onSendMock} />
      </Wrapper>,
    );
    const input = getByTestId('inputMessage');
    fireEvent.changeText(input, 'teste');

    expect(handleChangeMock).toHaveBeenCalled();
    expect(input.props.value).toEqual('teste');
  });
  it('send message', () => {
    const {getByTestId} = render(
      <Wrapper>
        <SendMessage onSend={onSendMock} />
      </Wrapper>,
    );
    const button = getByTestId('buttonSend');
    fireEvent.press(button, 'teste');

    expect(handleSendMock).toHaveBeenCalled();
  });
});
