import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ProductProps} from './View';

type UseProductProps = Pick<ProductProps, 'storage'>;

export function useProduct({storage}: UseProductProps) {
  const isLowStorage = Number(storage) <= 5;
  const isPressed = useSharedValue(false);
  const productAnimation = useAnimatedStyle(() => {
    return {
      height: withSpring(isPressed.value ? 350 : 100),
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: withTiming(isPressed.value ? '180deg' : '0deg')}],
    };
  });

  function handleToggleVisible() {
    isPressed.value = !isPressed.value;
  }

  return {
    isLowStorage,
    handleToggleVisible,
    productAnimation,
    circleAnimation,
    isPressed,
  };
}
