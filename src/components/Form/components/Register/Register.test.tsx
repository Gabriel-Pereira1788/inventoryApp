import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Wrapper} from '../../../JestWrapper';
import {Register} from './View';
import {useRegister} from './useViewModel';
import {RegisterDTO} from '../../../../models/Auth';

const mockUseRegister = useRegister as jest.Mock<
  ReturnType<typeof useRegister>
>;

jest.mock('./useViewModel');

const mockChange = jest.fn();
const mockSubmit = jest.fn();

const mockDataRegister: RegisterDTO = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
};

beforeAll(() => {
  mockUseRegister.mockImplementation(() => ({
    dataRegister: mockDataRegister,
    errors: {} as RegisterDTO,
    handleChange: mockChange,
    loading: false,
    onSubmit: mockSubmit,
  }));
});

describe('Register', () => {
  describe('Render component', () => {
    it('should render correctly', () => {
      const {getByText} = render(
        <Wrapper>
          <Register />
        </Wrapper>,
      );
      expect(getByText('Email')).toBeTruthy();
      expect(getByText('Senha')).toBeTruthy();
    });

    it('change form events', () => {
      const {getByTestId} = render(
        <Wrapper>
          <Register />
        </Wrapper>,
      );
      const inputEmail = getByTestId('inputEmail');
      const inputPassword = getByTestId('inputPassword');
      const inputConfirmPassword = getByTestId('inputConfirmPassword');
      const inputName = getByTestId('inputName');

      fireEvent.changeText(inputName, 'teste name');
      fireEvent.changeText(inputEmail, 'teste email');
      fireEvent.changeText(inputPassword, 'teste password');
      fireEvent.changeText(inputConfirmPassword, 'teste Confirmpassword');

      expect(mockChange).toHaveBeenCalledWith('email', 'teste email');
      expect(mockChange).toHaveBeenCalledWith('name', 'teste name');
      expect(mockChange).toHaveBeenCalledWith('password', 'teste password');
      expect(mockChange).toHaveBeenCalledWith(
        'confirmPassword',
        'teste Confirmpassword',
      );
    });

    it('submit data', () => {
      const {getByText} = render(
        <Wrapper>
          <Register />
        </Wrapper>,
      );

      const button = getByText('Confirmar');

      fireEvent.press(button);
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
