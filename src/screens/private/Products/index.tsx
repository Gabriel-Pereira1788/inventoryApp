import React, {createContext, useContext} from 'react';
//*styles
import * as S from 'native-base';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
import {Product} from './components/Product';
import {Controllers} from './components/Controllers';
import {RenderIF} from '../../../components/RenderIF';
import {SkeletonScreen} from './components/SkeletonScreen';
//* hooks
import {useProducts} from './hooks/useProducts';

const ProductsContext = createContext({} as ReturnType<typeof useProducts>);

export function Products() {
  const {products, isLoading} = useProducts();

  return (
    <ProductsContext.Provider value={{products, isLoading}}>
      <SharedLayout currentPath="products">
        <S.VStack mt={10} w="100%" flex={1} p={5}>
          <Controllers />

          <RenderIF condition={isLoading}>
            <SkeletonScreen />
          </RenderIF>

          <S.VStack mt={2} borderTopWidth={1} borderTopColor="#dddddd70">
            {!isLoading && products && products.length > 0 && (
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
    </ProductsContext.Provider>
  );
}

export function useContextProducts() {
  return useContext(ProductsContext);
}
