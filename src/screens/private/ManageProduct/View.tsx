import * as S from 'native-base';
import React from 'react';

//*components
import {SharedLayout} from '../../../components/SharedLayout';
import ContainerManagement from './components/ContainerManagement/View';
//*types
import {NavigationProps} from '../../../routes/navigation';
import Manage from './components/Manage/View';
import {Alert} from '../../../components/Alert/View';
import {useAlert} from '../../../hooks/useAlert';

export default function ManageProduct({
  route,
}: NavigationProps<'manageProduct'>) {
  const {alertConfig, handleAlertConfig} = useAlert();
  const {product} = route.params;
  return (
    <SharedLayout currentPath="products">
      <S.ScrollView
        mt="15%"
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        w="100%"
        px={10}>
        <S.Stack w="100%" space={5}>
          <ContainerManagement text="Editar" />
          <Manage product={product} handleAlertConfig={handleAlertConfig} />
        </S.Stack>
      </S.ScrollView>
      <Alert
        {...alertConfig}
        onClose={() => handleAlertConfig({isOpen: false})}
      />
    </SharedLayout>
  );
}
