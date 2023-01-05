import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'native-base';
import {RenderIF} from '.';
import {Wrapper} from '../JestWrapper';

describe('RenderIF', () => {
  it('Render component', () => {
    const {getByText} = render(
      <Wrapper>
        <RenderIF condition={true}>
          <Text>Teste</Text>
        </RenderIF>
      </Wrapper>,
    );

    expect(getByText('Teste')).toBeTruthy();
  });
});
