import React from 'react';
import {render, renderHook} from '@testing-library/react-native';
import {IsMounted} from './View';
import {Text} from 'native-base';
import {Wrapper} from '../JestWrapper';
import {useIsMounted} from './useViewModel';
import {act} from 'react-test-renderer';

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
      isMounted: true,
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

    expect(queryByText('Mounted!')).toBeFalsy();
  });
});

describe('useIsMounted', () => {
  describe('useIsMounted', () => {
    it('should set isMounted to true on focus', () => {
      const addListener = jest.fn();
      const removeListener = jest.fn();
      const propsNavigationHook = {navigation: {addListener, removeListener}};

      const {result} = renderHook(() =>
        useIsMounted({propsNavigation: propsNavigationHook}),
      );

      expect(result.current.isMounted).toBe(true);

      const [, focusHandler] = addListener.mock.calls.find(
        ([eventName]) => eventName === 'focus',
      );

      act(() => {
        focusHandler();
      });

      expect(result.current.isMounted).toBe(true);
    });

    it('should set isMounted to false on blur', () => {
      const addListener = jest.fn();
      const removeListener = jest.fn();
      const propsNavigationHook: any = {
        navigation: {addListener, removeListener},
      };

      const {result} = renderHook(() =>
        useIsMounted({
          propsNavigation: {
            ...propsNavigationHook,
            route: {
              key: 'teste',
              name: 'dashboard',
              params: undefined,
              path: 'teste',
            },
          },
        }),
      );

      expect(result.current.isMounted).toBe(true);

      const [, blurHandler] = addListener.mock.calls.find(
        ([eventName]) => eventName === 'blur',
      );

      act(() => {
        blurHandler();
      });

      expect(result.current.isMounted).toBe(false);
    });
  });
});
