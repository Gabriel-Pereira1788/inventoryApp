import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {Category} from '../../../constants/categories';
import {Products} from '../../../services/modules/Products/Products';
import {useUser} from '../../../store/useUser';

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function useProducts() {
  const user = useUser();

  const [category, setCategory] = useState<Category>({
    id: '9',
    label: 'Todas',
    value: 'todas',
  });

  function handleCategory(categoryData: Category) {
    setCategory(categoryData);
  }

  const {data: products, isLoading} = useQuery(
    ['products', category.value],
    () => Products.getProductsByUser(id),
  );

  return {products, isLoading, handleCategory};
}
