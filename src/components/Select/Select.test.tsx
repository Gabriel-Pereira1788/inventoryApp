import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Select} from './View';
import {Wrapper} from '../JestWrapper';

describe('Select component', () => {
  const items = [
    {id: 1, value: 'Option 1', label: 'Option 1'},
    {id: 2, value: 'Option 2', label: 'Option 2'},
    {id: 3, value: 'Option 3', label: 'Option 3'},
  ];

  const defaultProps = {
    title: 'Select an option',
    error: false,
    errorMessage: 'Have a error',
    items: items,
  };

  it('renders the component with the correct title', () => {
    const {getByText} = render(
      <Wrapper>
        <Select {...defaultProps} />
      </Wrapper>,
    );
    expect(getByText('Select an option')).not.toBeNull();
  });

  it('renders the component with the correct items', () => {
    const {getByText} = render(
      <Wrapper>
        <Select {...defaultProps} />
      </Wrapper>,
    );
    expect(getByText('Option 1')).not.toBeNull();
    expect(getByText('Option 2')).not.toBeNull();
    expect(getByText('Option 3')).not.toBeNull();
  });

  it('calls the onChange function when an option is selected', () => {
    const handleChange = jest.fn();
    const {getByTestId} = render(
      <Wrapper>
        <Select {...defaultProps} onValueChange={handleChange} />,
      </Wrapper>,
    );

    fireEvent.call('', getByTestId('select'), 'onValueChange');

    expect(handleChange).toHaveBeenCalled();
  });

  it('renders an error message when error prop is true', () => {
    const {getByText} = render(
      <Wrapper>
        <Select {...defaultProps} error={true} />
      </Wrapper>,
    );
    expect(getByText('Have a error')).not.toBeNull();
  });

  it('renders the correct error message when errorMessage prop is provided', () => {
    const {getByText} = render(
      <Wrapper>
        <Select
          {...defaultProps}
          error={true}
          errorMessage="Please select an option"
        />
      </Wrapper>,
    );
    expect(getByText('Please select an option')).not.toBeNull();
  });
});
