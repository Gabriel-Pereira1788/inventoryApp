import {useMemo} from 'react';
import {BestSellingProps} from '../components/BestSellingCard';
import {useNavigation} from '@react-navigation/native';

export function useBestSelling({bestSelling}: BestSellingProps) {
  const navigation = useNavigation();
  const total = useMemo(() => {
    if (bestSelling && bestSelling.data_sale) {
      const {data_sale} = bestSelling;

      return (
        (data_sale.price_saled - data_sale.price_purchased) *
        data_sale.pieces_saled
      );
    }
    return 0;
  }, [bestSelling]);

  function redirectScreen() {
    navigation.navigate('products');
  }

  return {total, redirectScreen};
}
