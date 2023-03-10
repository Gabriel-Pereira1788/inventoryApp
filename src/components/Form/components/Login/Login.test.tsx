import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Wrapper} from '../../../JestWrapper';
import {Login} from './View';
import {Errors, useLogin} from './useViewModel';

const mockUseLogin = useLogin as jest.Mock<ReturnType<typeof useLogin>>;

jest.mock('./useViewModel');

const mockChange = jest.fn();
const mockSubmit = jest.fn();

beforeAll(() => {
  mockUseLogin.mockImplementation(() => ({
    dataSignin: {email: '', password: ''},
    errors: {} as Errors,
    handleChange: mockChange,
    loading: false,
    onSubmit: mockSubmit,
  }));
});

describe('Login', () => {
  describe('Render component', () => {
    it('should render correctly', () => {
      const {getByText} = render(
        <Wrapper>
          <Login />
        </Wrapper>,
      );
      expect(getByText('Email')).toBeTruthy();
      expect(getByText('Senha')).toBeTruthy();
    });

    it('change form events', () => {
      const {getByTestId} = render(
        <Wrapper>
          <Login />
        </Wrapper>,
      );
      const inputEmail = getByTestId('inputEmail');
      const inputPassword = getByTestId('inputPassword');
      fireEvent.changeText(inputEmail, 'teste email');
      fireEvent.changeText(inputPassword, 'teste password');

      expect(mockChange).toHaveBeenCalledWith('email', 'teste email');
      expect(mockChange).toHaveBeenCalledWith('password', 'teste password');
    });

    it('submit data', () => {
      const {getByText} = render(
        <Wrapper>
          <Login />
        </Wrapper>,
      );

      const button = getByText('Confirmar');

      fireEvent.press(button);
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
