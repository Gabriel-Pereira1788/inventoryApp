import React, {createContext, useContext, useEffect} from 'react';
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

import {NavigationProps} from '../../../routes/navigation';

const ProductsContext = createContext({} as ReturnType<typeof useProducts>);

export function Products({navigation}: NavigationProps) {
  const {products, isLoading, isMount, setIsMount} = useProducts();

  useEffect(() => {
    navigation.addListener('blur', () => {
      setIsMount(false);
    });
  }, [navigation, setIsMount]);

  return (
    <RenderIF condition={isMount}>
      <ProductsContext.Provider
        value={{products, isLoading, isMount, setIsMount}}>
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
                  contentContainerStyle={{justifyContent: 'flex-start'}}
                  renderItem={({item}) => <Product {...item.product} />}
                  ListFooterComponent={() => <S.Box my={5} />}
                />
              )}
            </S.VStack>
          </S.VStack>
        </SharedLayout>
      </ProductsContext.Provider>
    </RenderIF>
  );
}

export function useContextProducts() {
  return useContext(ProductsContext);
}
