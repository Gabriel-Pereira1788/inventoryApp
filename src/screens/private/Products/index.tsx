import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
import DataProducts from './components/DataProducts';
import Product from './components/Product';
import {useProducts} from './hooks/useProducts';

export function Products() {
  const {products, isLoading} = useProducts();
  console.log(products);
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

        <S.VStack mt={5} borderTopWidth={1} borderTopColor="#dddddd70">
          {products && products.length > 0 && (
            <S.FlatList
              data={products}
              w="100%"
              mt={5}
              mb={70}
              renderItem={({item}) => <Product {...item.product} />}
            />
          )}
        </S.VStack>
      </S.VStack>
    </SharedLayout>
  );
}
