import React from 'react';
import {render} from '@testing-library/react-native';
import {Loading} from '.';
import {Wrapper} from '../JestWrapper';

describe('Loading', () => {
  describe('Render component', () => {
    it('Render component correctly', () => {
      const {getByTestId} = render(
        <Wrapper>
          <Loading />
        </Wrapper>,
      );

      expect(getByTestId('loading')).toBeTruthy();
    });
  });
});
