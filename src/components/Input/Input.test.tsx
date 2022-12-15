import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Input} from '.';
import {Wrapper} from '../JestWrapper';

describe('Input', () => {
  describe('Render component', () => {
    it('render component correctly', () => {
      const {getByText, getByTestId} = render(
        <Wrapper>
          <Input title="teste" />
        </Wrapper>,
      );

      expect(getByText('teste')).toBeTruthy();
      expect(getByTestId('input')).toBeTruthy();
    });
  });

  describe('Input works correctly', () => {
    it('change value input', () => {
      const mockFn = jest.fn();

      const {getByTestId} = render(
        <Wrapper>
          <Input title="teste" value={'teste'} onChangeText={mockFn} />
        </Wrapper>,
      );
      const input = getByTestId('input');
      fireEvent.changeText(input, 'teste1');

      expect(mockFn).toHaveBeenCalledWith('teste1');
    });
  });
});
