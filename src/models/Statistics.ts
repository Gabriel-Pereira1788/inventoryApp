export interface BestSelling {
  _id: string;
  id: string;
  id_product: string;
  id_user: string;
  pieces_saled: number;
  price_purchased: number;
  price_saled: number;
  storage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface StatisticsDTO {
  dataMonth: {
    [name: string]: {
      total_piece_sales: number;
      sales_amount: number;
      bestSelling: BestSelling;
      storage_month: number;
    };
  };
  dataTotal: {
    total_sales: number;
    total_pieces_sales: number;
    total_storage: number;
    total_price_saled: number;
    total_price_purchased: number;
  };
}
