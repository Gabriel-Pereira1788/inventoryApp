import React from 'react';
import {render} from '@testing-library/react-native';
import {Wrapper} from '../../../../../components/JestWrapper';
import Header from './View';

describe('Header', () => {
  it('render component correctly', () => {
    const {getByText, getByTestId} = render(
      <Wrapper>
        <Header />
      </Wrapper>,
    );

    expect(getByText('assistente virtual')).toBeTruthy();
    expect(getByTestId('iconBot')).toBeTruthy();
  });
});
