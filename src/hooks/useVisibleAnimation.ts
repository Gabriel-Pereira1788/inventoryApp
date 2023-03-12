<<<<<<< HEAD
=======
import {useState} from 'react';
>>>>>>> development
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface UseVisibleAnimatinoProps {
  initialH: number;
<<<<<<< HEAD
  animateH: number;
=======
  animateH: number | string;
>>>>>>> development
}

export function useVisibleAnimation({
  animateH,
  initialH,
}: UseVisibleAnimatinoProps) {
<<<<<<< HEAD
=======
  const [focus, setFocus] = useState(false);
>>>>>>> development
  const isPressed = useSharedValue(false);
  const visibleAnimation = useAnimatedStyle(() => {
    return {
      height: withSpring(isPressed.value ? animateH : initialH),
    };
  });

  function handleToggleVisible() {
    isPressed.value = !isPressed.value;
<<<<<<< HEAD
  }

  return {isPressed, visibleAnimation, handleToggleVisible};
=======
    setFocus(!focus);
  }

  return {isPressed, focus, visibleAnimation, handleToggleVisible};
>>>>>>> development
}
