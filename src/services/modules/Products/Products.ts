import {Product, ProductDTO} from '../../../models/Product';
import {api} from '../../api';

async function getProductsByUser(
  idUser: string,
): Promise<{relevantStatistics: {}; product: Product}[]> {
  const {data} = await api.get(`/products/${idUser}`);

  return data.dataProduct;
}

async function createProduct({dataProduct}: {dataProduct: ProductDTO}) {
  console.log(dataProduct);
  const {data} = await api.post('/create-product/', dataProduct);

  return data;
}

export const Products = {
  getProductsByUser,
  createProduct,
};
