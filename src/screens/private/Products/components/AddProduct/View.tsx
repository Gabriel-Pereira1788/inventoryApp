import React from 'react';
import * as S from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormProduct from '../FormProduct/View';
import {useModal} from '../../../../../hooks/useModal';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

MaterialIcons.loadFont();

export interface AddProductProps {}

export function AddProduct({}: AddProductProps) {
  const {isOpen, handleToggleState} = useModal();

  const pressed = useSharedValue(false);
  const uas = useAnimatedStyle(() => {
    return {
      transform: [{scale: withSpring(pressed.value ? 1.2 : 1)}],
    };
  });
  return (
    <S.HStack
      position="absolute"
      w="full"
      bottom={2}
      alignItems="center"
      justifyContent="center">
      <S.Circle
        _light={{backgroundColor: 'backgroundLight'}}
        _dark={{backgroundColor: 'backgroundDark'}}
        alignItems="center"
        justifyContent="center"
        overflow="hidden">
        <S.Pressable
          p={4}
          onPressIn={() => (pressed.value = true)}
          onPressOut={() => (pressed.value = false)}
          onPress={handleToggleState}>
          <Animated.View style={[uas]}>
            <S.Circle shadow={3} size={'sm'} backgroundColor="#474646">
              <MaterialIcons size={25} name="basket-plus" color="#F0DC61" />
            </S.Circle>
          </Animated.View>
        </S.Pressable>
      </S.Circle>
      <FormProduct isOpen={isOpen} onClose={handleToggleState} />
    </S.HStack>
  );
}
