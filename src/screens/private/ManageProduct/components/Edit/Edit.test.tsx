import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Edit} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {ProductDTO} from '../../../../../models/Product';
import {useEdit} from './useViewModel';

jest.mock('./useViewModel');

const mockSubmit = jest.fn();

const useEditMock = useEdit as jest.Mock<ReturnType<typeof useEdit>>;
describe('Edit', () => {
  beforeAll(() => {
    useEditMock.mockImplementation(() => ({
      handleFormSize: jest.fn(),
      heightAnimated: 50,
      isLoading: false,
      onSubmit: mockSubmit,
    }));
  });
  it('should render the edit form and submit it', () => {
    const testProduct: ProductDTO = {
      category: 'tecnologia',
      name_product: 'Teste',
      price_purchased: '50.00',
      price_saled: '200.00',
      storage: '15',
      id_product: '123',
      id_user: '1234',
      path_image: 'http://www.example.com',
    };

    const {getByTestId, getByText} = render(
      <Wrapper>
        <Edit product={testProduct} />,
      </Wrapper>,
    );

    expect(getByText('Editar')).toBeDefined();
    fireEvent.press(getByText('Editar'));

    const nameInput = getByTestId('name');
    const priceInput = getByTestId('price_saled');
    const pricePurchased = getByTestId('price_purchased');
    const quantityInput = getByTestId('storage');
    const submitButton = getByText('Confirmar');

    expect(nameInput).toBeDefined();
    expect(priceInput).toBeDefined();
    expect(quantityInput).toBeDefined();
    expect(pricePurchased).toBeDefined();

    expect(submitButton).toBeDefined();
  });
});
