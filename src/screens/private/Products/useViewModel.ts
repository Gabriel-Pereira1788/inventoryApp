import {useQuery} from '@tanstack/react-query';
import {useMemo, useRef, useState} from 'react';
<<<<<<< HEAD
import {useUser} from '../../../store/useUser';
import {Products} from './model';
=======
import {useStatistics} from '../../../store/useStatistics';
import {useUser} from '../../../store/useUser';
import {ProductsModel} from './model';
>>>>>>> development

export type DataFilter = {
  storage: number;
  price: number;
};

//*View Model
export function useProducts() {
  const user = useUser();
<<<<<<< HEAD
  const productsApi = useRef<Products>(new Products(user?.uid)).current;

  const [cleanUp, setCleanUp] = useState(false);
=======

  const productsApi = useRef<ProductsModel>(
    new ProductsModel(user?.uid),
  ).current;

  const [isMounted, setIsMounted] = useState(false);
>>>>>>> development

  const [searchText, setSearchText] = useState<string>('');
  const [category, setCategory] = useState<string>('todas');
  const [rangeFilter, setRangeFilter] = useState<DataFilter>({
    storage: 0,
    price: 0,
  });

  const {data: products, isLoading} = useQuery(['products', category], () =>
    productsApi.get(category),
  );

<<<<<<< HEAD
  console.log(products);

  const displayProducts = useMemo(() => {
    if (cleanUp) {
=======
  const {data: statisticsTotal} = useStatistics();
  console.log(products);

  const displayProducts = useMemo(() => {
    if (isMounted) {
>>>>>>> development
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
<<<<<<< HEAD
  }, [products, rangeFilter, cleanUp, searchText]);
=======
  }, [products, rangeFilter, isMounted, searchText]);
>>>>>>> development

  function handleCategory(categoryValue: string) {
    setCategory(categoryValue);
  }

  function handleRangeFilter(dataFilter: DataFilter) {
    setRangeFilter(dataFilter);
  }

<<<<<<< HEAD
  function cleanUpStates() {
    setCleanUp(true);
=======
  function handleMountedData(action: 'mount' | 'unmount') {
    return () => {
      if (action === 'mount') {
        setIsMounted(true);
      }
      if (action === 'unmount') {
        setIsMounted(false);
      }
    };
>>>>>>> development
  }

  return {
    products,
    displayProducts,
    isLoading,
    productsApi,
    category,
    searchText,
<<<<<<< HEAD
    setSearchText,
    handleCategory,
    handleRangeFilter,
    cleanUpStates,
=======
    statisticsTotal,
    setSearchText,
    handleCategory,
    handleRangeFilter,
    handleMountedData,
>>>>>>> development
  };
}
