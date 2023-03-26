import {useQuery} from '@tanstack/react-query';
import {Product} from '../../../models/Product';
import {useUser} from '../../../store/useUser';
import {ManageProduct} from './model';

interface UseManageProductProps {
  product: Product;
}

export function useManageProduct({product}: UseManageProductProps) {
  const user = useUser();
  const manageApi = new ManageProduct(user?.uid);

  console.log(product.id_product);

  const {data: dataProduct, isLoading} = useQuery(
    ['product', product.id_product],
    () => manageApi.getById(product.id_product),
    {refetchOnMount: false},
  );

  return {dataProduct, isLoading, manageApi};
}
