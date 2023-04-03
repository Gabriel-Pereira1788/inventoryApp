import React from 'react';
import {render} from '@testing-library/react-native';
import {ProductsList} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {useContextProducts} from '../../View';
import {ProductsModel} from '../../model';
import {Product} from '../../../../../models/Product';

const useContextMock = useContextProducts as jest.Mock<any>;
jest.mock('../../View');

describe('ProductsList', () => {
  const displayProducts: {product: Product; total_pieces_sales: number}[] = [
    {
      product: {
        name_product: 'Product 1',
        category: 'Tecnologia',
        id_product: '123',
        id_user: '1',
        price_purchased: 50,
        price_saled: 100,
        storage: 10,
      },
      total_pieces_sales: 5,
    },
    {
      product: {
        name_product: 'Product 2',
        category: 'Tecnologia',
        id_product: '1234',
        id_user: '1',
        price_purchased: 50,
        price_saled: 200,
        storage: 15,
      },
      total_pieces_sales: 10,
    },
  ];
  beforeAll(() => {
    useContextMock.mockImplementation(() => ({
      displayProducts: displayProducts,
      productsApi: new ProductsModel('123'),
    }));
  });
  it('should render the component', () => {
    const {getByText, getByTestId} = render(
      <Wrapper>
        <ProductsList />
      </Wrapper>,
    );

    // Check that the "Add Product" button is rendered
    const addButton = getByTestId('plus-icon');
    expect(addButton).toBeDefined();

    // Check that the list of products is rendered
    const product1Name = getByText('Product 1');
    const product1Price = getByText('$100.00');
    const product1Storage = getByText('10');
    expect(product1Name).toBeDefined();
    expect(product1Price).toBeDefined();
    expect(product1Storage).toBeDefined();

    const product2Name = getByText('Product 2');
    const product2Price = getByText('$200.00');
    const product2Storage = getByText('15');
    expect(product2Name).toBeDefined();
    expect(product2Price).toBeDefined();
    expect(product2Storage).toBeDefined();
  });
});
