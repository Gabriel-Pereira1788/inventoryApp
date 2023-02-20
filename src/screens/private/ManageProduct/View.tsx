import * as S from 'native-base';
import React from 'react';
import {Button} from '../../../components/Button/View';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
//*types
import {NavigationProps} from '../../../routes/navigation';

import ContainerManagement from './components/ContainerManagement/View';

export default function ManageProduct({
  route,
}: NavigationProps<'manageProduct'>) {
  const {product} = route.params;
  return (
    <SharedLayout currentPath="products">
      <S.VStack
        mt="15%"
        flex={1}
        alignItems="center"
        justifyContent="center"
        w="100%"
        px={10}>
        <S.Stack w="100%" space={5}>
          <ContainerManagement text="Editar" />
          <ContainerManagement text="Gerenciar" />
        </S.Stack>
      </S.VStack>
    </SharedLayout>
  );
}
