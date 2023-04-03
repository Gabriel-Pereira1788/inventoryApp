import {Circle} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = {};

export default function Pulse({}: Props) {
  const animationValue = useSharedValue(0);

  React.useEffect(() => {
    animationValue.value = withRepeat(
      withTiming(1, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [animationValue]);

  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [0, 1],
      [0.6, 0],
      Extrapolate.CLAMP,
    );

    return {
      opacity: opacity,
      transform: [{scale: animationValue.value}],
    };
  });

  return (
    <>
      <Circle
        position="absolute"
        rounded="full"
        width={3}
        height={3}
        right={0}
        bottom={5}
        zIndex={1}
        backgroundColor="#f47171">
        <Animated.View style={[styles.circle, animatedStyles]} />
      </Circle>
    </>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    borderRadius: 100,
    height: 50,
    position: 'relative',
    borderColor: '#f82e2e',
    borderWidth: 4,
    backgroundColor: '#f82e2e',
  },
});
