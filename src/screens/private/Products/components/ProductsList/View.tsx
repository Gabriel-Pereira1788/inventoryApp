import React from 'react';
import * as S from 'native-base';
import {Product} from '../Product/View';
import {useContextProducts} from '../../View';

import {AddProduct} from '../AddProduct/View';

interface ProductsListProps {}

export function ProductsList({}: ProductsListProps) {
  const {displayProducts} = useContextProducts();
  return (
    <S.VStack mt={2} borderTopWidth={1} borderTopColor="#dddddd70" flex={1}>
      <S.FlatList
        pagingEnabled={true}
        ListHeaderComponent={() => <AddProduct />}
        data={displayProducts}
        mt={2}
        mb={5}
        snapToAlignment={'center'}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        minH={350}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          flexGrow: 1,
          padding: 10,
        }}
        renderItem={({item}) => (
          <Product
            {...item.product}
            total_pieces_sales={item.total_pieces_sales || 0}
          />
        )}
      />
    </S.VStack>
  );
}
