import {ProductDTO} from '../../../models/Product';
import {api} from '../../../services/api';
import {Products} from '../../../services/modules/Products/Products';

//*Model
export class ProductsModel extends Products {
  super() {}

  async create({dataProduct}: {dataProduct: ProductDTO}) {
    await api.post('/create-product', dataProduct);
  }

  async delete(id: string) {
    console.log(id);
  }
}
