import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ContainerManagement from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {Text} from 'native-base';

describe('ContainerManagement', () => {
  it('should toggle visibility when pressed', () => {
    const {getByText} = render(
      <Wrapper>
        <ContainerManagement text="Test">
          <Text>Content</Text>
        </ContainerManagement>
      </Wrapper>,
    );

    expect(getByText('Test')).toBeTruthy();
    fireEvent.press(getByText('Test'));
    expect(getByText('Content')).toBeTruthy();
  });
});
