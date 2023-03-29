import React from 'react';
import {render} from '@testing-library/react-native';
import {Wrapper} from '../../../../../components/JestWrapper';
import Message from './View';

describe('Message', () => {
  it('should render user message with correct text', () => {
    const {getByTestId, getByText} = render(
      <Wrapper>
        <Message sender="user" text="Hello, world!" />,
      </Wrapper>,
    );
    const wrapperContainer = getByTestId('wrapperContainer');
    const messageText = getByText('Hello, world!');
    expect(wrapperContainer).toBeDefined();
    expect(messageText).toBeDefined();
  });

  it('should render assistant message with correct text', () => {
    const {getByTestId, getByText} = render(
      <Wrapper>
        <Message sender="assistant" text="Hi there!" />,
      </Wrapper>,
    );
    const wrapperContainer = getByTestId('wrapperContainer');
    const messageText = getByText('Hi there!');
    expect(wrapperContainer).toBeDefined();
    expect(messageText).toBeDefined();
  });
});
