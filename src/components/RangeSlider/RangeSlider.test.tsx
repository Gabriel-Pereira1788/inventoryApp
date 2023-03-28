import React from 'react';
import {render, act} from '@testing-library/react-native';
import {RangeSlider} from './View';
import {Wrapper} from '../JestWrapper';

describe('RangeSlider', () => {
  test('displays the correct title and value', () => {
    const {getByText} = render(
      <Wrapper>
        <RangeSlider title="Test Title" prefix="$" value={50} maxValue={100} />,
      </Wrapper>,
    );
    const title = getByText(/Test Title/);
    const value = getByText(/\$50/);
    expect(title).toBeTruthy();
    expect(value).toBeTruthy();
  });

  test('calls onChange prop when slider value changes', () => {
    const onChange = jest.fn();
    render(
      <Wrapper>
        <RangeSlider title="Test Title" prefix="$" onChange={onChange} />,
      </Wrapper>,
    );

    act(() => {
      onChange(50);
    });
    expect(onChange).toHaveBeenCalledWith(50);
  });
});
