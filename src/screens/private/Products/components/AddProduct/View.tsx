import React from 'react';
import * as S from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useModal} from '../../../../../hooks/useModal';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Modal from '../../../../../components/Modal/View';
import FormProduct from '../../../../../components/FormProduct';

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

      <Modal isOpen={isOpen} onClose={handleToggleState}>
        <S.Box mt={15} position="absolute" top={10}>
          <MaterialIcons size={100} name="basket-plus" color="#F0DC61" />
        </S.Box>
        <S.ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          w="100%"
          mt={40}
          p={10}
          py={15}
          h="full">
          <FormProduct.Create />
        </S.ScrollView>
      </Modal>
    </S.HStack>
  );
}
