import {Product} from '../../../models/Product';
import {api} from '../../api';

async function getProductsByUser(
  idUser: string,
): Promise<{relevantStatistics: {}; product: Product}[]> {
  const {data} = await api.get(`/products/${idUser}`);

  return data.dataProduct;
}

export const Products = {
  getProductsByUser,
};
