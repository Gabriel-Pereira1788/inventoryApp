import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Product, ProductProps} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {useProduct} from './useViewModel';

const redirectSingleProductMock = jest.fn();

const useProductMock = useProduct as jest.Mock<any>;
jest.mock('./useViewModel');

describe('Product', () => {
  const props: ProductProps = {
    category: 'tecnologia',
    id_product: '1',
    id_user: '123',
    price_purchased: 1.0,
    name_product: 'Product 1',
    path_image: 'https://example.com/image.png',
    price_saled: 9.99,
    storage: 10,
    total_pieces_sales: 5,
  };

  beforeAll(() => {
    useProductMock.mockImplementation(() => ({
      isLowStorage: false,
      redirectSingleProduct: redirectSingleProductMock,
    }));
  });

  it('should render the component with props', () => {
    const {getByText} = render(
      <Wrapper>
        <Product {...props} />
      </Wrapper>,
    );
    const productName = getByText(props.name_product);
    const productPrice = getByText(`$${props.price_saled.toFixed(2)}`);
    const productStorage = getByText(`${props.storage}`);

    expect(productName).toBeDefined();
    expect(productPrice).toBeDefined();
    expect(productStorage).toBeDefined();
  });

  it('should call the `redirectSingleProduct` function on press', () => {
    const {getByTestId} = render(
      <Wrapper>
        <Product {...props} />
      </Wrapper>,
    );
    const productTouchable = getByTestId('productTouchable');

    fireEvent.press(productTouchable);

    expect(redirectSingleProductMock).toHaveBeenCalled();
  });
});
