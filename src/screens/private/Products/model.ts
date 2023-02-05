import {Category} from '../../../constants/categories';
import {Product, ProductDTO} from '../../../models/Product';
import {api} from '../../../services/api';

export class Products {
  private idUser?: string;
  constructor(idUser?: string) {
    this.idUser = idUser;
  }

  async get(
    category: Category,
  ): Promise<{relevantStatistics: {}; product: Product}[]> {
    const {data} = await api.get(
      `/products/${this.idUser}?category=${category.value}`,
    );

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
