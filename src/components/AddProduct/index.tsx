import React from 'react';
import * as S from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FormProduct from '../FormProduct';
import {useModal} from '../../hooks/useModal';
MaterialIcons.loadFont();

type Props = {};

export default function AddProduct({}: Props) {
  const {isOpen, handleToggleState} = useModal();
  return (
    <>
      <S.Circle
        backgroundColor="backgroundLight"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        overflow="hidden"
        bottom={3}>
        <S.Pressable
          p={5}
          _pressed={{opacity: 0.7}}
          onPress={handleToggleState}>
          <S.Circle shadow={3} size={'md'} backgroundColor="#474646">
            <MaterialIcons size={30} name="basket-plus" color="#F0DC61" />
          </S.Circle>
        </S.Pressable>
      </S.Circle>
      <FormProduct isOpen={isOpen} onClose={handleToggleState} />
    </>
  );
}
