import {useQuery} from '@tanstack/react-query';
import {useAlert} from '../../../hooks/useAlert';
import {Product} from '../../../models/Product';
import {useUser} from '../../../store/useUser';
import {ManageProduct} from './model';

interface UseManageProductProps {
  product: Product;
}

export function useManageProduct({product}: UseManageProductProps) {
  const user = useUser();
  const manageApi = new ManageProduct(user?.uid);

  const {alertConfig, handleAlertConfig} = useAlert();
  const {data: dataProduct, isLoading} = useQuery(
    ['product', product.id_product],
    () => manageApi.getById(product.id_product),
    {refetchOnMount: false},
  );

  console.log(dataProduct?.category);

  return {alertConfig, dataProduct, isLoading, manageApi, handleAlertConfig};
}
