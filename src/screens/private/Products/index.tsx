import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {SharedLayout} from '../../../components/SharedLayout';

import Product from './components/Product';
import {useProducts} from './hooks/useProducts';

export function Products() {
  const {products, isLoading} = useProducts();
  console.log(products);
  return (
    <SharedLayout currentPath="products">
      <S.VStack mt={10} w="100%" flex={1} p={5}>
        <S.VStack mt={2} borderTopWidth={1} borderTopColor="#dddddd70">
          {products && products.length > 0 && (
            <S.FlatList
              data={products}
              w="100%"
              mt={5}
              renderItem={({item}) => <Product {...item.product} />}
            />
          )}
        </S.VStack>
      </S.VStack>
    </SharedLayout>
  );
}
