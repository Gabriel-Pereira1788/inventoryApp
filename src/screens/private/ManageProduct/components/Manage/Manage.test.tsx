import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Wrapper} from '../../../../../components/JestWrapper';
import Manage from './View';
import {Product} from '../../../../../models/Product';
import {useManage} from './useViewModel';
import {useVisibleAnimation} from '../../../../../hooks/useVisibleAnimation';

const product: Product = {
  category: 'moda',
  id_product: '1',
  id_user: '12345',
  name_product: 'teste1',
  price_purchased: 25.0,
  price_saled: 100,
  storage: 10,
};

const useMockManage = useManage as jest.Mock<any>;
const useMockVisible = useVisibleAnimation as jest.Mock<any>;
jest.mock('../../../../../hooks/useVisibleAnimation');
jest.mock('./useViewModel');
describe('Manage', () => {
  const handleManageMock = jest.fn();
  beforeEach(() => {
    useMockVisible.mockImplementation(() => ({
      focus: true,
    }));
    useMockManage.mockImplementation(() => {
      return {
        manageForm: {
          salesPieces: '',
          purchasedPieces: '',
        },
        handleManageForm: handleManageMock,
      };
    });
  });

  it('Change input value ', () => {
    const {getByTestId} = render(
      <Wrapper>
        <Manage product={product} />
      </Wrapper>,
    );

    const inputPurchase = getByTestId('inputPurchased');
    const inputSales = getByTestId('inputSales');

    fireEvent.changeText(inputPurchase, '25.00');
    fireEvent.changeText(inputSales, '35.00');

    expect(handleManageMock).toHaveBeenCalled();
  });
});
