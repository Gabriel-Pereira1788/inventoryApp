import {useNavigation} from '@react-navigation/native';
import {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {useVisibleAnimation} from '../../../../../hooks/useVisibleAnimation';
import {Product} from '../../../../../models/Product';

export function useProduct(props: Product) {
  const isLowStorage = Number(props.storage) <= 5;
  const navigation = useNavigation();

  const {
    isPressed,
    handleToggleVisible,
    visibleAnimation: productAnimation,
  } = useVisibleAnimation({animateH: 350, initialH: 100});

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
    handleToggleVisible,
    handleManageProduct,
    productAnimation,
    circleAnimation,
    isPressed,
  };
}
