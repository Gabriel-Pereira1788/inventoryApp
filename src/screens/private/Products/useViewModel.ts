import {useQuery} from '@tanstack/react-query';
import {useMemo, useRef, useState} from 'react';
import {useUser} from '../../../store/useUser';
import {Products} from './model';

export type DataFilter = {
  storage: number;
  price: number;
};

export function useProducts() {
  const user = useUser();
  const productsApi = useRef<Products>(new Products(user?.uid)).current;

  const [cleanUp, setCleanUp] = useState(false);

  const [searchText, setSearchText] = useState<string>('');
  const [category, setCategory] = useState<string>('todas');
  const [rangeFilter, setRangeFilter] = useState<DataFilter>({
    storage: 0,
    price: 0,
  });

  const {data: products, isLoading} = useQuery(
    ['products', category],
    () => productsApi.get(category),
    {refetchOnMount: false},
  );

  const displayProducts = useMemo(() => {
    if (cleanUp) {
      return [];
    }
    return products?.filter(({product}) => {
      const rangeCondition =
        product.price_saled >= rangeFilter.price &&
        product.storage >= rangeFilter.storage;

      if (searchText.trim() !== '') {
        return rangeCondition && product.name_product.includes(searchText);
      }

      return rangeCondition;
    });
  }, [products, rangeFilter, cleanUp, searchText]);

  function handleCategory(categoryValue: string) {
    setCategory(categoryValue);
  }

  function handleRangeFilter(dataFilter: DataFilter) {
    setRangeFilter(dataFilter);
  }

  function cleanUpStates() {
    setCleanUp(true);
  }

  return {
    products,
    displayProducts,
    isLoading,
    productsApi,
    category,
    searchText,
    setSearchText,
    handleCategory,
    handleRangeFilter,
    cleanUpStates,
  };
}
