import React from 'react';
import {render} from '@testing-library/react-native';
import {SharedLayout} from '.';
import {Wrapper} from '../JestWrapper';
import {Text} from 'native-base';

const colorActive = '#2989b0';
describe('SharedLayout', () => {
  describe('Render component', () => {
    it('render component correctly', () => {
      const {getByText} = render(
        <Wrapper>
          <SharedLayout>
            <Text>Teste</Text>
          </SharedLayout>
        </Wrapper>,
      );
      expect(getByText('Teste')).toBeTruthy();
    });

    it('render component with path dashboard', () => {
      const {getByTestId} = render(
        <Wrapper>
          <SharedLayout currentPath="dashboard">
            <Text>Teste</Text>
          </SharedLayout>
        </Wrapper>,
      );

      expect(getByTestId('iconDashboard').props.style[0].color).toEqual(
        colorActive,
      );
    });
    it('render component with path products', () => {
      const {getByTestId} = render(
        <Wrapper>
          <SharedLayout currentPath="products">
            <Text>Teste</Text>
          </SharedLayout>
        </Wrapper>,
      );

      expect(getByTestId('iconProducts').props.style[0].color).toEqual(
        colorActive,
      );
    });
    it('render component with path notifications', () => {
      const {getByTestId} = render(
        <Wrapper>
          <SharedLayout currentPath="notifications">
            <Text>Teste</Text>
          </SharedLayout>
        </Wrapper>,
      );

      expect(getByTestId('iconNotifications').props.style[0].color).toEqual(
        colorActive,
      );
    });
  });
});
