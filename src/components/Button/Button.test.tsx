import React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '.';
import {Wrapper} from '../JestWrapper';

describe('Button', () => {
  it('Render component', () => {
    const {getByText} = render(
      <Wrapper>
        <Button>Confirmar</Button>
      </Wrapper>,
    );

    expect(getByText('Confirmar')).toBeTruthy();
  });
});
