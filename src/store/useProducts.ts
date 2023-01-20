import {useQuery} from '@tanstack/react-query';
import {Products} from '../services/modules/Products/Products';

export function useProducts(idUser: string) {
  return useQuery(['products'], () => Products.getProductsByUser(idUser));
}
