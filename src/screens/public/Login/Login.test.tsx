import React from 'react';
import {render} from '@testing-library/react-native';
import {Login} from './View';
import {Wrapper} from '../../../components/JestWrapper';

describe('Login', () => {
  describe('Render component', () => {
    it('Render component correctly', () => {
      const {getByTestId} = render(
        <Wrapper>
          <Login />
        </Wrapper>,
      );

      expect(getByTestId('container')).toBeTruthy();
      expect(getByTestId('container').children.length).toEqual(1);
    });

    it('Render component with light theme', async () => {
      const {getByTestId} = render(
        <Wrapper>
          <Login />
        </Wrapper>,
      );
      const container = getByTestId('container');

      expect(container.props.style.backgroundColor).toEqual('#F9F6F6');
    });
  });
});
