import {render} from '@testing-library/react-native';
import React from 'react';
import {BestSellingCard} from '.';
import {Wrapper} from '../../../../../components/JestWrapper';
import {Product} from '../../../../../models/Product';
import {BestSelling} from '../../../../../models/Statistics';
import {formatDate} from '../../../../../utils/formatDate';

const mockBestSelling: {
  product: Product | null;
  data_sale: BestSelling | null;
} = {
  product: {
    createdAt: new Date(),
    updatedAt: new Date(),
    id_product: '2',
    id_user: '3',
    name_product: 'teste',
    price_purchased: 100,
    price_saled: 200,
    storage: 20,
  },
  data_sale: {
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '1',
    id_product: '2',
    id_user: '3',
    pieces_saled: 20,
    price_purchased: 100,
    price_saled: 200,
    storage: 20,
  },
};
describe('BestSellingCard', () => {
  describe('Render Component', () => {
    it('render component with mocked data bestSelling', () => {
      const {getByText} = render(
        <Wrapper>
          <BestSellingCard bestSelling={mockBestSelling} />
        </Wrapper>,
      );

      const formatedDate = formatDate(mockBestSelling.data_sale!.createdAt);

      expect(getByText(mockBestSelling.product!.name_product)).toBeTruthy();
      expect(getByText(formatedDate)).toBeTruthy();
      expect(
        getByText(String(mockBestSelling.data_sale!.pieces_saled)),
      ).toBeTruthy();
    });
    it('render component with loading state', () => {
      const {getByTestId} = render(
        <Wrapper>
          <BestSellingCard bestSelling={mockBestSelling} loadingData={true} />
        </Wrapper>,
      );

      expect(getByTestId('skeletonLoading')).toBeTruthy();
    });
  });
});
