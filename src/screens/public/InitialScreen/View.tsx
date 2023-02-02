import * as S from 'native-base';

import React from 'react';
import {Loading} from '../../../components/Loading/View';
import {useInitial} from './useViewModel';

export function InitialScreen() {
  useInitial();
  return (
    <S.VStack
      bg="dark.400"
      flex={1}
      alignItems="center"
      justifyContent="flex-start"
      p={3}>
      <S.VStack w="100%" mt="20%" alignItems="center">
        <S.Text fontWeight="bold" color="#fff" fontSize="3xl" mb="10%">
          INVENTORY
        </S.Text>
        <S.Image
          source={require('../../../Assets/images/inventory.png')}
          alt="inventory image"
          height={200}
          testID="image"
        />
      </S.VStack>
      <S.Box mt="20%">
        <Loading />
      </S.Box>
    </S.VStack>
  );
}
