import {Product} from './Product';

export type FilterDate =
  | 'day'
  | 'week'
  | 'month'
  | '3 month'
  | '6 month'
  | 'year';

export interface BestSelling {
  id: string;
  id_product: string;
  id_user: string;
  pieces_saled: number;
  price_purchased: number;
  price_saled: number;
  storage: number;
  createdAt: string;
  updatedAt: string;
}

export interface StatisticsDTO {
  parts_entered: number;
  parts_leave: number;
  best_selling: {
    product: Product | null;
    data_sale: BestSelling | null;
  };
  total_sales: number;
}
