import {useQuery} from '@tanstack/react-query';
import {useMemo, useRef, useState} from 'react';
import {useUser} from '../../../store/useUser';
import {ProductsModel} from './model';

export type DataFilter = {
  storage: number;
  price: number;
};

//*View Model
export function useProducts() {
  const user = useUser();

  const productsApi = useRef<ProductsModel>(
    new ProductsModel(user?.uid),
  ).current;

  const [isMounted, setIsMounted] = useState(false);

  const [searchText, setSearchText] = useState<string>('');
  const [category, setCategory] = useState<string>('todas');
  const [rangeFilter, setRangeFilter] = useState<DataFilter>({
    storage: 0,
    price: 0,
  });

  const {data: products, isLoading} = useQuery(['products', category], () =>
    productsApi.get(category),
  );

  console.log(products);

  const displayProducts = useMemo(() => {
    if (isMounted) {
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
  }, [products, rangeFilter, isMounted, searchText]);

  function handleCategory(categoryValue: string) {
    setCategory(categoryValue);
  }

  function handleRangeFilter(dataFilter: DataFilter) {
    setRangeFilter(dataFilter);
  }

  function handleMountedData(action: 'mount' | 'unmount') {
    return () => {
      if (action === 'mount') {
        setIsMounted(true);
      }
      if (action === 'unmount') {
        setIsMounted(false);
      }
    };
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
    handleMountedData,
  };
}
