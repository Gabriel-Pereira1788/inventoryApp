import React from 'react';
import * as S from 'native-base';
import {Product} from '../Product/View';
import {useContextProducts} from '../../View';

interface ProductsListProps {}

export function ProductsList({}: ProductsListProps) {
  const {isLoading, displayProducts} = useContextProducts();
  return (
    <>
      {!isLoading && displayProducts && displayProducts.length > 0 && (
        <S.FlatList
          pagingEnabled={true}
          data={displayProducts}
          my={5}
          snapToAlignment={'center'}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
<<<<<<< HEAD
          maxH={350}
          contentContainerStyle={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',

            padding: 15,
          }}
          renderItem={({item}) => <Product {...item.product} />}
=======
          minH={350}
          contentContainerStyle={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexGrow: 1,
            padding: 15,
          }}
          renderItem={({item}) => (
            <Product
              {...item.product}
              total_pieces_sales={item.total_pieces_sales}
            />
          )}
>>>>>>> development
        />
      )}
    </>
  );
}
