import {ProductDTO} from '../../../models/Product';
import {api} from '../../api';

export class Products {
  idUser?: string;

  constructor(idUser?: string) {
    this.idUser = idUser;
  }

  async create({dataProduct}: {dataProduct: ProductDTO}) {
    console.log(dataProduct);
    const {data} = await api.post('/create-product/', dataProduct);

    return data;
  }
  async update(id: string) {
    console.log(id);
  }
}
