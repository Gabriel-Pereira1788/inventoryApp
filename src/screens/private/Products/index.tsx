import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
import DataProducts from './components/DataProducts';
import Product from './components/Product';

export function Products() {
  return (
    <SharedLayout currentPath="products">
      <S.VStack mt={16} w="100%" flex={1} p={5}>
        <S.HStack
          w="100%"
          alignItems="center"
          justifyContent="space-evenly"
          px={5}
          space={3}>
          <DataProducts titleCard="Total de produtos" />
          <DataProducts titleCard="Em estoque" />
        </S.HStack>

        <S.VStack
          mt={'25%'}
          w="100%"
          borderTopWidth={1}
          borderTopColor="#dddddd70"
          space={5}
          py={2}>
          <Product />
          <Product />
          <Product />
        </S.VStack>
      </S.VStack>
    </SharedLayout>
  );
}
