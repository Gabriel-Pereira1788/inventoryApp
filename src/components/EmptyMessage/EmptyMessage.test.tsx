import React from 'react';
import {render} from '@testing-library/react-native';
import {Wrapper} from '../JestWrapper';
import EmptyMessage from './View';
import {Text} from 'native-base';

describe('EmptyMessage', () => {
  describe('Render component', () => {
    it('should render without crashing', () => {
      const {getByText} = render(
        <Wrapper>
          <EmptyMessage message="MessageTeste">
            <Text>Teste children</Text>
          </EmptyMessage>
        </Wrapper>,
      );

      expect(getByText('MessageTeste')).toBeTruthy();
      expect(getByText('Teste children')).toBeTruthy();
    });
  });
});
