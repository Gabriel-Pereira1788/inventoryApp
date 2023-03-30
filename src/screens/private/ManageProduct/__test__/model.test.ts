import {ProductDTO} from '../../../../models/Product';
import {api} from '../../../../services/api';
import {ManageProduct} from '../model';

const apiMock = api as jest.Mocked<typeof api>;

jest.mock('../../../../services/api', () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
  },
}));

describe('ManageProduct', () => {
  let manageProduct: ManageProduct;
  const idUser = 'user-id';
  const product: ProductDTO = {
    id_product: 'product-id',
    storage: 10,
    price_purchased: '5',
    price_saled: '10',
    category: 'tecnologia',
    name_product: 'teste',
    id_user: '123',
    path_image: 'http://www.example.com',
  };

  beforeEach(() => {
    // Reset the mock API module before each test
    jest.resetAllMocks();
    manageProduct = new ManageProduct(idUser);
  });

  describe('purchaseProduct', () => {
    it('should call the purchase-product endpoint and update the product storage', async () => {
      const piecesPurchased = 3;
      const expectedStorage = Number(product.storage) + Number(piecesPurchased);
      const expectedDataSubmit = {
        storage: product.storage,
        id_user: idUser,
        id_product: product.id_product,
        price_purchased: product.price_purchased,
        price_saled: product.price_saled,
        date: new Date(),
        pieces_purchased: piecesPurchased,
      };
      await manageProduct.purchaseProduct(product, piecesPurchased);
      expect(apiMock.post).toHaveBeenCalledWith(
        '/purchased-product',
        expectedDataSubmit,
      );
      expect(apiMock.patch).toHaveBeenCalledWith(
        `/edit-product/${product.id_product}`,
        {...product, storage: expectedStorage},
      );
    });
  });

  describe('saleProduct', () => {
    it('should call the sale-product endpoint and update the product storage', async () => {
      const piecesSaled = 2;
      const expectedStorage = Number(product.storage) - piecesSaled;
      const expectedDataSubmit = {
        storage: product.storage,
        id_user: idUser,
        id_product: product.id_product,
        price_purchased: product.price_purchased,
        price_saled: product.price_saled,
        date: new Date(),
        pieces_saled: piecesSaled,
      };
      await manageProduct.saleProduct(product, piecesSaled);
      expect(api.post).toHaveBeenCalledWith(
        '/saled-product',
        expectedDataSubmit,
      );
      expect(api.patch).toHaveBeenCalledWith(
        `/edit-product/${product.id_product}`,
        {...product, storage: expectedStorage},
      );
    });
  });

  describe('getById', () => {
    it('should call the single-product endpoint and return the first product', async () => {
      const idProduct = 'product-id';
      const expectedData = {
        data: {
          product: [product],
        },
      };
      apiMock.get.mockResolvedValueOnce(expectedData);
      const result = await manageProduct.getById(idProduct);
      expect(api.get).toHaveBeenCalledWith(`/single-product/${idProduct}`);
      expect(result).toEqual(product);
    });

    it('should return undefined if the product is not found', async () => {
      const idProduct = 'unknown-product-id';
      const expectedData = {
        data: {
          product: [],
        },
      };
      apiMock.get.mockResolvedValueOnce(expectedData);
      const result = await manageProduct.getById(idProduct);
      expect(api.get).toHaveBeenCalledWith(`/single-product/${idProduct}`);
      expect(result).toBeUndefined();
    });
  });
});
