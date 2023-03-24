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
  path_image?: string;
}

export interface ProductDTO {
  path_image?: string;
  id_product?: string;
  id_user?: string;
  name_product: string;
  price_purchased: string;
  price_saled: string;
  storage: string | number;
  category: string;
}
