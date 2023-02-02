export interface Product {
  id_product: string;
  id_user: string;
  name_product: string;
  price_purchased: number;
  price_saled: number;
  storage: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductDTO {
  id_product?: string;
  id_user?: string;
  name_product: string;
  price_purchased: string;
  price_saled: string;
  storage: string;
  category: string;
}
