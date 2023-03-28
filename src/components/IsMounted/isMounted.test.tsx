import React from 'react';
import {render} from '@testing-library/react-native';
import {IsMounted} from './View';
import {Text} from 'native-base';
import {Wrapper} from '../JestWrapper';
import {useIsMounted} from './useViewModel';

const propsNavigation = {} as any;

jest.mock('./useViewModel');

const mockUseIsMounted = useIsMounted as jest.MockedFunction<
  typeof useIsMounted
>;

beforeEach(() => {
  mockUseIsMounted.mockImplementation(() => ({
    isMounted: true,
  }));
});
describe('IsMounted component', () => {
  it('should render its children when mounted', () => {
    const mockMountedFunction = jest.fn();
    const {queryByText} = render(
      <Wrapper>
        <IsMounted
          propsNavigation={{
            navigation: propsNavigation,
            route: {
              key: 'teste',
              name: 'dashboard',
              params: undefined,
              path: 'teste',
            },
          }}
          mountedFunction={mockMountedFunction}>
          <Text>Mounted!</Text>
        </IsMounted>
      </Wrapper>,
    );

    expect(queryByText('Mounted!')).not.toBeNull();
  });

  beforeEach(() => {
    mockUseIsMounted.mockImplementation(() => ({
      isMounted: false,
    }));
  });

  it('should not render its children when unmounted', () => {
    const mockUnMountedFunction = jest.fn();
    const {queryByText} = render(
      <Wrapper>
        <IsMounted
          propsNavigation={{
            navigation: propsNavigation,
            route: {
              key: 'teste',
              name: 'dashboard',
              params: undefined,
              path: 'teste',
            },
          }}
          unMountedFunction={mockUnMountedFunction}>
          <Text>Mounted!</Text>
        </IsMounted>
      </Wrapper>,
    );

    expect(queryByText('Mounted!')).toBeNull();
  });
});
