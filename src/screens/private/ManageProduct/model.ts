import {Product, ProductDTO} from '../../../models/Product';
import {api} from '../../../services/api';

export class ManageProduct {
  idUser?: string;
  constructor(idUser?: string) {
    if (!this.idUser) {
      this.idUser = idUser;
    }
  }

  async purchaseProduct(dataProduct: Product, piecesPurchased: number) {
    const {storage, id_product, price_purchased, price_saled} = dataProduct;
    const dataSubmit = {
      storage,
      id_user: this.idUser,
      id_product,
      price_purchased,
      price_saled,
      date: new Date(),
      pieces_purchased: piecesPurchased,
    };
    await api.post('/purchased-product', dataSubmit);
    dataProduct.storage = dataProduct.storage + piecesPurchased;
    await api.patch(`/edit-product/${id_product}`, dataProduct);
  }

  async saleProduct(dataProduct: Product, piecesSaled: number) {
    const {storage, id_product, price_purchased, price_saled} = dataProduct;
    const dataSubmit = {
      storage,
      id_user: this.idUser,
      id_product,
      price_purchased,
      price_saled,
      date: new Date(),
      pieces_saled: piecesSaled,
    };
    await api.post('/saled-product', dataSubmit);
    dataProduct.storage = dataProduct.storage - piecesSaled;
    await api.patch(`/edit-product/${id_product}`, dataProduct);
  }

  async updateProduct(dataProduct: Product, newDataProduct: ProductDTO) {
    await api.patch(`/edit-product/${dataProduct.id_product}`, newDataProduct);
  }
}
