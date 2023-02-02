import {useMemo, useState} from 'react';
import {useContextProducts} from '../../View';
import {DataFilter} from './view.models';

export function useFilter() {
  const {products} = useContextProducts();

  const [dataFilter, setDataFilter] = useState<DataFilter>({
    storage: 0,
    price: 0,
  });

  function handleDataFilter(name: keyof DataFilter) {
    return (value: number) => {
      setDataFilter(prev => ({...prev, [name]: value}));
    };
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

  return {totalValue, totalStorage, dataFilter, handleDataFilter};
}
