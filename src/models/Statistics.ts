import {months} from '../constants/months';
import {Product} from './Product';

export type FilterDate =
  | 'day'
  | 'week'
  | 'month'
  | '3 month'
  | '6 month'
  | 'year';

export interface Selling {
  id: string;
  id_product: string;
  id_user: string;
  pieces_saled: number;
  price_purchased: number;
  price_saled: number;
  storage: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface StatisticsDTO {
  parts_entered: number;
  parts_leave: number;
  best_selling: {
    product: Product | null;
    data_sale: Selling | null;
  };
  total_sales: number;
  total_product: number;
  total_storage: number;
  sales: Selling[];
}

export type StatisticsChart = {
  [name in months]: {
    total_piece_sales: number;
    sales_amount: number;
    storage_month: number;
  };
};
