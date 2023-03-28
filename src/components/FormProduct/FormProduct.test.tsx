import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Wrapper} from '../JestWrapper';
import {FormProduct} from './View';
import {Errors, useFormProduct} from './useViewModel';

const mockUseForm = useFormProduct as jest.Mock<
  ReturnType<typeof useFormProduct>
>;

const mockChange = jest.fn();
const mockChangeCurrency = jest.fn();
const mockSubmit = jest.fn();
const mockSetImage = jest.fn();
const mockGetImage = jest.fn();

beforeAll(() => {
  mockUseForm.mockImplementation(() => {
    return {
      errors: {} as Errors,
      handleChange: mockChange,
      handleChangeCurrency: mockChangeCurrency,
      handleSubmit: mockSubmit,
      handleSetImage: mockSetImage,
      getImageLibrary: mockGetImage,
      productDTO: {
        category: '',
        name_product: '',
        price_purchased: '',
        price_saled: '',
        storage: '',
        id_product: '',
        id_user: '',
        path_image: '',
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

      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
