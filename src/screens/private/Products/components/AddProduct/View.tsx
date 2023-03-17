import React from 'react';
import * as S from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Animated from 'react-native-reanimated';
import Modal from '../../../../../components/Modal/View';
import {useAddProduct} from './useViewModel';
import {FormProduct} from '../../../../../components/FormProduct/View';

MaterialIcons.loadFont();

export interface AddProductProps {}

export function AddProduct({}: AddProductProps) {
  const {isOpen, pressed, uas, loadingSubmit, handleToggleState, onSubmit} =
    useAddProduct({});
  return (
    <S.HStack
      position="absolute"
      w="full"
      bottom={5}
      alignItems="center"
      justifyContent="center">
      <S.Pressable
        p={4}
        onPressIn={() => (pressed.value = true)}
        onPressOut={() => (pressed.value = false)}
        onPress={handleToggleState}>
        <Animated.View style={[uas]}>
          <S.Circle shadow={3} size={'md'} backgroundColor="#474646">
            <MaterialIcons size={32} name="basket-plus" color="#F0DC61" />
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
          <FormProduct loadingSubmit={loadingSubmit} onSubmit={onSubmit} />
        </S.ScrollView>
      </Modal>
    </S.HStack>
  );
}
