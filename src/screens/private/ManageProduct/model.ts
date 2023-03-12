<<<<<<< HEAD
import {Product, ProductDTO} from '../../../models/Product';
=======
import {ProductDTO} from '../../../models/Product';
>>>>>>> development
import {api} from '../../../services/api';

export class ManageProduct {
  idUser?: string;
<<<<<<< HEAD
  constructor(idUser: string) {
=======
  product?: ProductDTO;
  constructor(idUser?: string) {
>>>>>>> development
    if (!this.idUser) {
      this.idUser = idUser;
    }
  }

<<<<<<< HEAD
  async purchaseProduct(dataProduct: Product, piecesPurchased: number) {
=======
  async purchaseProduct(dataProduct: ProductDTO, piecesPurchased: number) {
>>>>>>> development
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
<<<<<<< HEAD
    dataProduct.storage = dataProduct.storage + piecesPurchased;
    await api.patch(`/edit-product/${id_product}`, dataProduct);
  }

  async saleProduct(dataProduct: Product, piecesSaled: number) {
=======
    dataProduct.storage = Number(dataProduct.storage) + piecesPurchased;
    await api.patch(`/edit-product/${id_product}`, dataProduct);
  }

  async saleProduct(dataProduct: ProductDTO, piecesSaled: number) {
>>>>>>> development
    const {storage, id_product, price_purchased, price_saled} = dataProduct;
    const dataSubmit = {
      storage,
      id_user: this.idUser,
      id_product,
      price_purchased,
      price_saled,
      date: new Date(),
<<<<<<< HEAD
      pieces_purchased: piecesSaled,
    };
    await api.post('/purchased-product', dataSubmit);
    dataProduct.storage = dataProduct.storage - piecesSaled;
    await api.patch(`/edit-product/${id_product}`, dataProduct);
  }

  async updateProduct(dataProduct: Product, newDataProduct: ProductDTO) {
    await api.patch(`/edit-product/${dataProduct.id_product}`, newDataProduct);
=======
      pieces_saled: piecesSaled,
    };
    await api.post('/saled-product', dataSubmit);
    dataProduct.storage = Number(dataProduct.storage) - piecesSaled;
    await api.patch(`/edit-product/${id_product}`, dataProduct);
  }

  async getById(idProduct: string) {
    const {data}: {data: {product: ProductDTO[]}} = await api.get(
      `/single-product/${idProduct}`,
    );

    return data.product.length > 0 ? data.product[0] : undefined;
  }

  async updateProduct({
    dataProduct,
    idProduct,
  }: {
    dataProduct: ProductDTO;
    idProduct?: string;
  }) {
    await api.patch(`/edit-product/${idProduct}`, dataProduct);
  }

  public static async deleteProduct(idProduct?: string) {
    await api.delete(`/delete-product/${idProduct}`);
>>>>>>> development
  }
}
