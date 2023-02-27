import {Product, ProductDTO} from '../../../models/Product';
import {api} from '../../../services/api';

//*Model
export class ProductsModel {
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
    console.log(this.idUser);
    return data.dataProduct ? data.dataProduct : [];
  }

  async create({dataProduct}: {dataProduct: ProductDTO}) {
    await api.post('/create-product', dataProduct);
  }

  async delete(id: string) {
    console.log(id);
  }
}
