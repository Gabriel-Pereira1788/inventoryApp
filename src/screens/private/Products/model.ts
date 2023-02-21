import {Product} from '../../../models/Product';
import {api} from '../../../services/api';
import {Products} from '../../../services/modules/Products/Products';

//*Model
export class ProductsModel extends Products {
  super() {}

  async get(
    category: string,
  ): Promise<{relevantStatistics: {}; product: Product}[]> {
    const {data} = await api.get(`/products/${this.idUser}/${category}`);
    console.log(this.idUser);
    return data.dataProduct ? data.dataProduct : [];
  }

  async delete(id: string) {
    console.log(id);
  }
}
