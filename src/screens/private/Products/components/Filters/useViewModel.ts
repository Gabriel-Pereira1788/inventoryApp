import {useMemo, useState} from 'react';
import {useContextProducts} from '../../View';
import {FiltersProps} from './View';

export type DataFilter = {
  storage: number;
  price: number;
};

type UserFilterProps = Pick<FiltersProps, 'onClose'>;

export function useFilter({onClose}: UserFilterProps) {
  const {products, category, handleCategory, handleRangeFilter} =
    useContextProducts();

  const [prevRangeFilter, setPrevRangeFilter] = useState<DataFilter>({
    storage: 0,
    price: 0,
  });

  const [currentCategory, setCurrentCategory] = useState<string>(category);

  function handleDataFilter(name: keyof DataFilter, value: number) {
    setPrevRangeFilter(prev => ({...prev, [name]: value}));
  }

  function handleCurrentCategory(value: string) {
    setCurrentCategory(value);
  }

  function setFilters() {
    handleCategory(currentCategory.toLowerCase());
    handleRangeFilter(prevRangeFilter);
    onClose();
  }

  const totalValue = useMemo(() => {
    if (products && products.length > 0) {
      return products.reduce((acc, {product}) => {
        acc += product.price_saled;
        return acc;
      }, 0);
    }
    return 0;
  }, [products]);

  const totalStorage = useMemo(() => {
    if (products && products.length > 0) {
      return products.reduce((acc, {product}) => {
        acc += product.storage;
        return acc;
      }, 0);
    }
    return 0;
  }, [products]);

  return {
    totalValue,
    totalStorage,
    dataFilter: prevRangeFilter,
    currentCategory,
    handleDataFilter,
    handleCurrentCategory,
    setFilters,
  };
}
