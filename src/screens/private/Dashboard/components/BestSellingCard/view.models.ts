import {Product} from '../../../../../models/Product';
import {BestSelling} from '../../../../../models/Statistics';

export interface BestSellingProps {
  loadingData?: boolean;
  bestSelling?: {
    product: Product | null;
    data_sale: BestSelling | null;
  };
}
