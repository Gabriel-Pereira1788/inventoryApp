import {useQuery} from '@tanstack/react-query';
import {Products} from '../services/modules/Products/Products';
import {useUser} from './useUser';

export function useProductsStore() {
  const user = useUser();
  const products = new Products(user?.uid);
  return useQuery(['products'], () => products.get('todas'));
}
