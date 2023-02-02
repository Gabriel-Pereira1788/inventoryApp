import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {FilterGraph} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';

describe('FilterGraph', () => {
  describe('Render Component', () => {
    it('render component correctly', () => {
      const mockFn = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <FilterGraph
            changeFilter={mockFn}
            currentFilter={'day'}
            identifier="3 month">
            3M
          </FilterGraph>
        </Wrapper>,
      );

      expect(getByText('3M')).toBeTruthy();
    });

    it('change filter', () => {
      const mockFn = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <FilterGraph
            changeFilter={mockFn}
            currentFilter={'day'}
            identifier="3 month">
            3M
          </FilterGraph>
        </Wrapper>,
      );

      fireEvent.press(getByText('3M'));

      expect(mockFn).toHaveBeenCalledWith('3 month');
    });
  });
});
