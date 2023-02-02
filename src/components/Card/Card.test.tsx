import {render} from '@testing-library/react-native';
import {Text} from 'native-base';
import React from 'react';
import {Card} from './View';
import {Wrapper} from '../JestWrapper';

describe('Card', () => {
  describe('Render component', () => {
    it('render component correctly', () => {
      const {getByText, getByTestId} = render(
        <Wrapper>
          <Card testID="card">
            <Text>Teste</Text>
          </Card>
        </Wrapper>,
      );

      console.log(getByTestId('card').props);
      expect(getByText('Teste')).toBeTruthy();
    });
  });
});
