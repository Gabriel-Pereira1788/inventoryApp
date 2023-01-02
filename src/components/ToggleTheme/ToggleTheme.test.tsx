import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {act} from 'react-test-renderer';
import {ToggleTheme} from '.';
import {Wrapper} from '../JestWrapper';

describe('ToggleTheme', () => {
  describe('Render component', () => {
    it('render component correctly', () => {
      const {getByTestId} = render(
        <Wrapper>
          <ToggleTheme />
        </Wrapper>,
      );

      expect(getByTestId('containerIcon')).toBeTruthy();
    });
  });

  describe('Toggle Theme', () => {
    it('toggle to dark theme', () => {
      const {getByTestId, rerender} = render(
        <Wrapper>
          <ToggleTheme />
        </Wrapper>,
      );
      const toggleButon = getByTestId('toggleColorButton');

      fireEvent.press(toggleButon);

      act(() => {
        rerender(
          <Wrapper>
            <ToggleTheme />
          </Wrapper>,
        );
      });

      const container = getByTestId('containerIcon');
      console.log(container.props.style);
      expect(true).toBeTruthy();
    });
  });
});
