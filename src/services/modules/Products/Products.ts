import {Product} from '../../../models/Product';
import {api} from '../../api';

export class Products {
  idUser?: string;
  constructor(idUser?: string) {
    this.idUser = idUser;
  }

  async get(
    category: string,
  ): Promise<
    {relevantStatistics: {}; product: Product; total_pieces_sales: number}[]
  > {
    const {data} = await api.get(`/products/${this.idUser}/${category}`);

    return data.dataProduct ? data.dataProduct : [];
  }
}
