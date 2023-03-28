import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Alert} from './View';
import {Wrapper} from '../JestWrapper';
import {useAlert} from './useViewModel';

const onCloseMock = jest.fn();

const useAlertMock = useAlert as jest.Mock<any>;

jest.mock('./useViewModel');

beforeEach(() => {
  useAlertMock.mockImplementation(() => ({
    alertConfig: {
      isOpen: true,
      text: 'Test message',
      title: 'Test title',
    },
    onClose: onCloseMock,
  }));
});

describe('Alert component', () => {
  it('should render an alert with the correct title and message', () => {
    const {getByText} = render(
      <Wrapper>
        <Alert />
      </Wrapper>,
    );
    const title = getByText('Test title');
    const message = getByText('Test message');
    expect(title).toBeDefined();
    expect(message).toBeDefined();
  });

  it('should call onClose when the close button is pressed', () => {
    const {getByTestId} = render(
      <Wrapper>
        <Alert />
      </Wrapper>,
    );
    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
