import React from 'react';
import * as S from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Animated from 'react-native-reanimated';
import Modal from '../../../../../components/Modal/View';
import {useAddProduct} from './useViewModel';
import {FormProduct} from '../../../../../components/FormProduct/View';
import {TouchableOpacity} from 'react-native';

MaterialIcons.loadFont();

export interface AddProductProps {}

export function AddProduct({}: AddProductProps) {
  const {isOpen, pressed, uas, loadingSubmit, handleToggleState, onSubmit} =
    useAddProduct({});
  return (
    <>
      <S.HStack w="100%" alignItems="center" justifyContent="flex-end">
        <TouchableOpacity
          onPressIn={() => (pressed.value = true)}
          onPress={handleToggleState}
          onPressOut={() => (pressed.value = false)}>
          <Animated.View style={uas}>
            <MaterialIcons size={37} name="plus" color="#2989b0" />
          </Animated.View>
        </TouchableOpacity>
      </S.HStack>

      <Modal isOpen={isOpen} onClose={handleToggleState}>
        <S.ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          w="100%"
          p={10}
          py={15}
          h="full">
          <FormProduct loadingSubmit={loadingSubmit} onSubmit={onSubmit} />
        </S.ScrollView>
      </Modal>
    </>
  );
}
