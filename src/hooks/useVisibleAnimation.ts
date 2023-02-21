import {useState} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface UseVisibleAnimatinoProps {
  initialH: number;
  animateH: number;
}

export function useVisibleAnimation({
  animateH,
  initialH,
}: UseVisibleAnimatinoProps) {
  const [focus, setFocus] = useState(false);
  const isPressed = useSharedValue(false);
  const visibleAnimation = useAnimatedStyle(() => {
    return {
      height: withSpring(isPressed.value ? animateH : initialH),
    };
  });

  function handleToggleVisible() {
    isPressed.value = !isPressed.value;
    setFocus(!focus);
  }

  return {isPressed, focus, visibleAnimation, handleToggleVisible};
}
