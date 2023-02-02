import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from './View';
import {Wrapper} from '../JestWrapper';

describe('Button', () => {
  describe('Rende component', () => {
    it('Render component correctly', () => {
      const {getByText} = render(
        <Wrapper>
          <Button>Confirmar</Button>
        </Wrapper>,
      );

      expect(getByText('Confirmar')).toBeTruthy();
    });
    it('Render component correctly with loading', () => {
      const {getByTestId} = render(
        <Wrapper>
          <Button loading={true} testID="containerLoading">
            Confirmar
          </Button>
        </Wrapper>,
      );

      expect(getByTestId('containerLoading').children.length).toEqual(2);
    });
  });

  describe('Events Call', () => {
    it('onPress called', () => {
      const mockFn = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <Button onPress={mockFn}>Confirmar</Button>
        </Wrapper>,
      );

      fireEvent.press(getByText('Confirmar'));

      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
