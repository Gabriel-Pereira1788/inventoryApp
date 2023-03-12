import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
<<<<<<< HEAD
import {Wrapper} from '../JestWrapper';
import {FormProduct} from './View';
import {Errors, useFormProduct} from './useViewModel';

const mockUseForm = useFormProduct as jest.Mock<
  ReturnType<typeof useFormProduct>
>;

const mockChange = jest.fn();
const mockChangeCurrency = jest.fn();
const mockSubmit = jest.fn();

beforeAll(() => {
  mockUseForm.mockImplementation(() => {
    return {
      errors: {} as Errors,
      handleChange: mockChange,
      handleChangeCurrency: mockChangeCurrency,
      handleSubmit: mockSubmit,
      productDTO: {
        category: '',
        name_product: '',
        price_purchased: '',
        price_saled: '',
        storage: '',
        id_product: '',
        id_user: '',
      },
    };
  });
});

jest.mock('./useViewModel');
describe('FormProduct', () => {
  describe('render component ', () => {
    it('should render', () => {
      const mockOnSubmit = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <FormProduct onSubmit={mockOnSubmit} loadingSubmit={false} />
        </Wrapper>,
      );

      expect(getByText('Nome do produto')).toBeTruthy();

      expect(getByText('Preço de venda')).toBeTruthy();

      expect(getByText('Preço de compra')).toBeTruthy();

      expect(getByText('Estoque inicial')).toBeTruthy();

      expect(getByText('Categoria')).toBeTruthy();

      expect(getByText('Confirmar')).toBeTruthy();
    });

    it('call change function', () => {
      const mockOnSubmit = jest.fn();
      const {getByTestId} = render(
        <Wrapper>
          <FormProduct onSubmit={mockOnSubmit} loadingSubmit={false} />
        </Wrapper>,
      );

      fireEvent.changeText(getByTestId('name'), 'teste nome');

      fireEvent.changeText(getByTestId('price_saled'), 'teste preço venda');

      fireEvent.changeText(
        getByTestId('price_purchased'),
        'teste preço compra',
      );

      fireEvent.changeText(getByTestId('storage'));

      fireEvent.changeText(getByTestId('category'));

      expect(mockChange).toHaveBeenCalledWith('name_product');

      expect(mockChangeCurrency).toHaveBeenCalledWith('price_saled');

      expect(mockChangeCurrency).toHaveBeenCalledWith('price_purchased');

      expect(mockChange).toHaveBeenCalledWith('storage');

      expect(mockChange).toHaveBeenCalledWith('category');
    });

    it('call submit function', () => {
      const mockOnSubmit = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <FormProduct onSubmit={mockOnSubmit} loadingSubmit={false} />
        </Wrapper>,
      );

      fireEvent.press(getByText('Confirmar'));

=======
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
>>>>>>> development
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
