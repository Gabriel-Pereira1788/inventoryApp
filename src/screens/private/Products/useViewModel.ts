import {useQuery} from '@tanstack/react-query';
import {useRef, useState} from 'react';
import {Category} from '../../../constants/categories';
import {useUser} from '../../../store/useUser';
import {Products} from './model';

export function useProducts() {
  const user = useUser();
  const productsApi = useRef<Products>(new Products(user?.uid)).current;

  const [category, setCategory] = useState<Category>({
    id: '9',
    label: 'Todas',
    value: 'todas',
  });
  const {data: products, isLoading} = useQuery(
    ['products', category.value],
    () => productsApi.get(category),
    {
      onError: err => {
        console.log(err);
      },
    },
  );

  function handleCategory(categoryData: Category) {
    setCategory(categoryData);
  }

  return {products, isLoading, productsApi, handleCategory};
}
