import React from 'react';
import {render} from '@testing-library/react-native';
import {Wrapper} from '../JestWrapper';
import {CurrencyFormat} from './View';

describe('CurrencyFormat', () => {
  describe('Render component', () => {
    it('should render', () => {
      const {getByText} = render(
        <Wrapper>
          <CurrencyFormat value={1000.75} />
        </Wrapper>,
      );

      expect(getByText('$1,000.75')).toBeTruthy();
    });
  });
});
