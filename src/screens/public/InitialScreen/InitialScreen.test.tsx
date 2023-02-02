import React from 'react';
import {render} from '@testing-library/react-native';
import {InitialScreen} from './View';
import {Wrapper} from '../../../components/JestWrapper';
import {mockedNavigate} from '../../../../jestSetup';
import {act} from 'react-test-renderer';
describe('InitialScreen', () => {
  describe('Render component', () => {
    it('render component correctly', () => {
      const {getByText, getByTestId} = render(
        <Wrapper>
          <InitialScreen />
        </Wrapper>,
      );
      const image = getByTestId('image');

      expect(getByText('INVENTORY')).toBeTruthy();
      expect(image).toBeTruthy();
    });

    it('redirect to correctly page', () => {
      jest.useFakeTimers();
      render(
        <Wrapper>
          <InitialScreen />
        </Wrapper>,
      );
      act(() => {
        jest.runAllTimers();
      });
      expect(mockedNavigate).toHaveBeenCalledWith('login');
    });
  });
});
