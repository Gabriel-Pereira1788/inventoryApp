import {useNavigation} from '@react-navigation/native';
import {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useVisibleAnimation} from '../../../../../hooks/useVisibleAnimation';
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

  console.log(props.total_pieces_sales);

  const {
    isPressed,
    handleToggleVisible,
    visibleAnimation: productAnimation,
  } = useVisibleAnimation({animateH: 350, initialH: 'auto'});

  const circleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: withTiming(isPressed.value ? '180deg' : '0deg')}],
    };
  });

  function handleManageProduct() {
    navigation.navigate('manageProduct', {product: props});
  }

  return {
    isLowStorage,
    storagePercentage,
    piecesSaledPercentage,
    handleToggleVisible,
    handleManageProduct,
    productAnimation,
    circleAnimation,
    isPressed,
  };
}
