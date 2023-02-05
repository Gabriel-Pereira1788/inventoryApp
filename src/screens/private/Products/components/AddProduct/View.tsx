import React from 'react';
import * as S from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormProduct from '../FormProduct/View';
import {useModal} from '../../../../../hooks/useModal';

MaterialIcons.loadFont();

export interface AddProductProps {}

export function AddProduct({}: AddProductProps) {
  const {isOpen, handleToggleState} = useModal();
  return (
    <S.HStack
      position="absolute"
      w="full"
      bottom={2}
      alignItems="center"
      justifyContent="center">
      <S.Circle
        backgroundColor="backgroundLight"
        alignItems="center"
        justifyContent="center"
        overflow="hidden">
        <S.Pressable
          p={4}
          _pressed={{opacity: 0.7}}
          onPress={handleToggleState}>
          <S.Circle shadow={3} size={'md'} backgroundColor="#474646">
            <MaterialIcons size={30} name="basket-plus" color="#F0DC61" />
          </S.Circle>
        </S.Pressable>
      </S.Circle>
      <FormProduct isOpen={isOpen} onClose={handleToggleState} />
    </S.HStack>
  );
}
