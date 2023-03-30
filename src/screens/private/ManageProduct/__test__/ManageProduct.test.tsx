import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ManageProduct from '../View';
import {Wrapper} from '../../../../components/JestWrapper';
import {Product} from '../../../../models/Product';
import {act} from 'react-test-renderer';

const mockModalFn = jest.fn();
jest.mock('../useViewModel', () => ({
  useManageProduct: jest.fn(() => ({
    dataProduct: {
      id: '1',
      name_product: 'Test Product',
      category: 'test',
      storage: 'test',
      price_saled: 10.0,
      price_purchased: 5.0,
    },
  })),
}));

jest.mock('../../../../hooks/useModal', () => ({
  useModal: jest.fn(() => ({
    isOpen: false,
    handleToggleState: mockModalFn,
  })),
}));

const testProduct: Product = {
  category: 'tecnologia',
  name_product: 'Teste',
  price_purchased: 50,
  price_saled: 200,
  storage: 15,
  id_product: '123',
  id_user: '1234',
  path_image: 'http://www.example.com',
};

const route = {params: {product: testProduct}} as any;
const navigation = {
  addListener: jest.fn(),
} as any;
describe('ManageProduct component', () => {
  it('should render the product name', () => {
    const {getByText} = render(
      <Wrapper>
        <ManageProduct route={route} navigation={navigation} />,
      </Wrapper>,
    );
    expect(getByText('Teste')).toBeTruthy();
  });

  it('should render the product category', () => {
    const {getByText} = render(
      <Wrapper>
        <ManageProduct route={route} navigation={navigation} />,
      </Wrapper>,
    );
    expect(getByText('tecnologia')).toBeTruthy();
  });

  it('should render the product storage', () => {
    const {getByText} = render(
      <Wrapper>
        <ManageProduct route={route} navigation={navigation} />,
      </Wrapper>,
    );
    expect(getByText('15')).toBeTruthy();
  });

  it('should render the product sale price', () => {
    const {getByText} = render(
      <Wrapper>
        <ManageProduct route={route} navigation={navigation} />,
      </Wrapper>,
    );
    expect(getByText('Preço de venda: R$200.00')).toBeTruthy();
  });

  it('should render the product purchase price', () => {
    const {getByText} = render(
      <Wrapper>
        <ManageProduct route={route} navigation={navigation} />,
      </Wrapper>,
    );
    expect(getByText('Preço de compra: R$50.00')).toBeTruthy();
  });

  it('should open the delete modal when the delete button is pressed', () => {
    const {getByTestId, getByText} = render(
      <Wrapper>
        <ManageProduct route={route} navigation={navigation} />,
      </Wrapper>,
    );
    fireEvent.press(getByTestId('deleteButton'));
    expect(
      getByText('Tem certeza que Deseja deletar Test Product?'),
    ).toBeTruthy();
  });

  it('should close the delete modal when the cancel button is pressed', () => {
    const {getByTestId, queryByText} = render(
      <Wrapper>
        <ManageProduct route={route} navigation={navigation} />,
      </Wrapper>,
    );
    fireEvent.press(getByTestId('deleteButton'));
    act(() => {
      mockModalFn();
    });
    expect(
      queryByText('Tem certeza que deseja deletar o produto?'),
    ).toBeFalsy();
  });
});
