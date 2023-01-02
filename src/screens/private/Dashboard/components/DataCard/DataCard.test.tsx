import React from 'react';
import {render} from '@testing-library/react-native';
import {DataCard} from '.';
import {Wrapper} from '../../../../../components/JestWrapper';

describe('DataCard', () => {
  describe('Render component', () => {
    it('render component correctly', () => {
      const {getByTestId, getByText} = render(
        <Wrapper>
          <DataCard />
        </Wrapper>,
      );

      expect(getByTestId('iconChart')).toBeTruthy();
      expect(getByText('3027')).toBeTruthy();
    });
  });
});
