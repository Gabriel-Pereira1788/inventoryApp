import {useNavigation} from '@react-navigation/native';
import {Product} from '../../../../../models/Product';
import {calculatePercentage} from '../../../../../utils/calculatePercentage';
import {useContextProducts} from '../../View';

interface UseProductProps extends Product {
  total_pieces_sales: number;
}

export function useProduct(props: UseProductProps) {
  const {statisticsTotal} = useContextProducts();
  const isLowStorage = Number(props.storage) <= 5;
  const piecesSaledPercentage = statisticsTotal
    ? calculatePercentage(
        props.total_pieces_sales,
        statisticsTotal.dataTotal.total_pieces_sales,
      )
    : 0;
  const storagePercentage = statisticsTotal
    ? calculatePercentage(
        Number(props.storage),
        statisticsTotal?.dataTotal.total_storage,
      )
    : 0;

  const navigation = useNavigation();

  function handleManageProduct() {
    navigation.navigate('manageProduct', {product: props});
  }

  function redirectSingleProduct() {
    navigation.navigate('manageProduct', {
      product: props,
    });
  }

  return {
    isLowStorage,
    storagePercentage,
    piecesSaledPercentage,
    handleManageProduct,
    redirectSingleProduct,
  };
}
