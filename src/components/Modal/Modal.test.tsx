import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Modal from './View';
import {Wrapper} from '../JestWrapper';
import * as S from 'native-base';

describe('Modal', () => {
  it('renders children prop', () => {
    const {getByText} = render(
      <Wrapper>
        <Modal isOpen={true}>Hello world!</Modal>
      </Wrapper>,
    );
    const element = getByText('Hello world!');
    expect(element).toBeDefined();
  });

  it('renders with flex and animation preset props', () => {
    const {getByTestId} = render(
      <Wrapper>
        <Modal flex={1} animationPreset="slide" isOpen={true}>
          <></>
        </Modal>
      </Wrapper>,
    );
    const element = getByTestId('modal');

    expect(true).toBeTruthy();
    expect(element.props.style.flex).toBe(1);
  });

  it('close modal', () => {
    const mockClose = jest.fn();
    const {getByTestId} = render(
      <Wrapper>
        <Modal onClose={mockClose} isOpen={true}>
          <S.Modal.CloseButton testID="close-button" />
        </Modal>
      </Wrapper>,
    );

    const button = getByTestId('close-button');

    fireEvent.press(button);
    expect(mockClose).toHaveBeenCalled();
  });
});
