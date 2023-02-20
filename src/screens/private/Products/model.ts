import {Product, ProductDTO} from '../../../models/Product';
import {api} from '../../../services/api';

//*Model
export class Products {
  private idUser?: string;
  constructor(idUser?: string) {
    this.idUser = idUser;
  }

  async get(
    category: string,
  ): Promise<{relevantStatistics: {}; product: Product}[]> {
    const {data} = await api.get(`/products/${this.idUser}/${category}`);

    return data.dataProduct ? data.dataProduct : [];
  }

  async create({dataProduct}: {dataProduct: ProductDTO}) {
    console.log(dataProduct);
    const {data} = await api.post('/create-product/', dataProduct);

    return data;
  }

  async delete(id: string) {
    console.log(id);
  }

  async update(id: string) {
    console.log(id);
  }
}
