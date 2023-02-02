import React, {createContext, useContext} from 'react';
//*styles
import * as S from 'native-base';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
import {Product} from './components/Product/View';
import {Controllers} from './components/Controllers/View';
import {RenderIF} from '../../../components/RenderIF/View';
import {SkeletonScreen} from './components/SkeletonScreen/View';
import {IsMounted} from '../../../components/IsMounted/View';
//* hooks
import {useProducts} from './useViewModel';
import {NavigationProps} from '../../../routes/navigation';

const ProductsContext = createContext({} as ReturnType<typeof useProducts>);

export function Products(propsNavigation: NavigationProps) {
  const {products, isLoading, ...rest} = useProducts();

  return (
    <IsMounted propsNavigation={propsNavigation}>
      <ProductsContext.Provider value={{products, isLoading, ...rest}}>
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
    </IsMounted>
  );
}

export function useContextProducts() {
  return useContext(ProductsContext);
}
