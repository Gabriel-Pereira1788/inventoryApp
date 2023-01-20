import {useQuery} from '@tanstack/react-query';
import {Products} from '../../../../services/modules/Products/Products';
import {useUser} from '../../../../store/useUser';

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function useProducts() {
  const user = useUser();
  const {data: products, isLoading} = useQuery(['products'], () =>
    Products.getProductsByUser(id),
  );

  return {products, isLoading};
}
