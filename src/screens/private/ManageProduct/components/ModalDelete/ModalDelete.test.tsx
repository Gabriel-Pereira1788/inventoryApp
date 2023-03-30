import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ModalDelete} from './View';
import {ProductDTO} from '../../../../../models/Product';
import {useModalDelete} from './useViewModel';
import {Wrapper} from '../../../../../components/JestWrapper';

jest.mock('./useViewModel');

const useModalMock = useModalDelete as jest.Mock<
  ReturnType<typeof useModalDelete>
>;

const handleDeleteMock = jest.fn();

describe('ModalDelete', () => {
  beforeAll(() => {
    useModalMock.mockImplementation(() => ({
      handleDeleteProduct: handleDeleteMock,
      isLoading: false,
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
  const mockProduct: ProductDTO = {
    category: 'moda',
    id_product: '1',
    id_user: '12345',
    name_product: 'teste1',
    price_purchased: '25.0',
    price_saled: '100',
    storage: 10,
  };

  test('displays the product name in the confirmation message', () => {
    const {getByText} = render(
      <Wrapper>
        <ModalDelete product={mockProduct} isOpen={true} />
      </Wrapper>,
    );
    expect(
      getByText(`Tem certeza que Deseja deletar ${mockProduct.name_product}?`),
    ).toBeDefined();
  });

  test('calls handleDeleteProduct when the Confirmar button is pressed', () => {
    const {getByText} = render(
      <Wrapper>
        <ModalDelete product={mockProduct} isOpen={true} />
      </Wrapper>,
    );

    fireEvent.press(getByText('Confirmar'));

    expect(handleDeleteMock).toHaveBeenCalled();
  });
});
