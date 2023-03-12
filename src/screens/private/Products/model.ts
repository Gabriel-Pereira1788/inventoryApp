import {Product, ProductDTO} from '../../../models/Product';
import {api} from '../../../services/api';

//*Model
<<<<<<< HEAD
export class Products {
  private idUser?: string;
=======
export class ProductsModel {
  idUser?: string;
>>>>>>> development
  constructor(idUser?: string) {
    this.idUser = idUser;
  }

  async get(
    category: string,
<<<<<<< HEAD
  ): Promise<{relevantStatistics: {}; product: Product}[]> {
    const {data} = await api.get(`/products/${this.idUser}/${category}`);

=======
  ): Promise<
    {relevantStatistics: {}; product: Product; total_pieces_sales: number}[]
  > {
    const {data} = await api.get(`/products/${this.idUser}/${category}`);
    console.log(this.idUser);
>>>>>>> development
    return data.dataProduct ? data.dataProduct : [];
  }

  async create({dataProduct}: {dataProduct: ProductDTO}) {
<<<<<<< HEAD
    console.log(dataProduct);
    const {data} = await api.post('/create-product/', dataProduct);

    return data;
=======
    await api.post('/create-product', dataProduct);
>>>>>>> development
  }

  async delete(id: string) {
    console.log(id);
  }
<<<<<<< HEAD

  async update(id: string) {
    console.log(id);
  }
=======
>>>>>>> development
}
