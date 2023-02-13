import React, {createContext, useContext} from 'react';
//*styles
import * as S from 'native-base';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
import {Controllers} from './components/Controllers/View';
import {RenderIF} from '../../../components/RenderIF/View';
import {SkeletonScreen} from './components/SkeletonScreen/View';
//* hooks
import {useProducts} from './useViewModel';
import {NavigationProps} from '../../../routes/navigation';
import BottomTabsProducts from './components/BottomTabsProducts/View';
import {IsMounted} from '../../../components/IsMounted/View';
import {ProductsList} from './components/ProductsList/View';

type Context = Omit<ReturnType<typeof useProducts>, 'cleanUpStates'>;

const ProductsContext = createContext({} as Context);

export function Products(propsNavigation: NavigationProps) {
  const {isLoading, cleanUpStates, ...rest} = useProducts();

  return (
    <IsMounted
      propsNavigation={propsNavigation}
      cleanUpFunction={cleanUpStates}>
      <ProductsContext.Provider value={{isLoading, ...rest}}>
        <SharedLayout currentPath="products">
          <S.VStack mt={10} w="100%" flex={1} p={5}>
            <Controllers />

            <RenderIF condition={isLoading}>
              <SkeletonScreen />
            </RenderIF>

            <S.VStack mt={2} borderTopWidth={1} borderTopColor="#dddddd70">
              <ProductsList />
            </S.VStack>
          </S.VStack>
        </SharedLayout>
        <BottomTabsProducts currentPath="products" />
      </ProductsContext.Provider>
    </IsMounted>
  );
}

export function useContextProducts() {
  return useContext(ProductsContext);
}
