import * as S from 'native-base';
import React from 'react';

//*components
import {SharedLayout} from '../../../components/SharedLayout';
import Manage from './components/Manage/View';
import {Alert} from '../../../components/Alert/View';
import {Edit} from './components/Edit/View';
//*types
import {NavigationProps} from '../../../routes/navigation';
//*hooks
import {useManageProduct} from './useViewModel';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ManageProduct({
  route,
}: NavigationProps<'manageProduct'>) {
  const {product} = route.params;
  const {alertConfig, dataProduct, handleAlertConfig} = useManageProduct({
    product,
  });
  return (
    <SharedLayout currentPath="products">
      <S.Pressable position="absolute" top={15} right={5}>
        <Ionicons name="trash" color="red" size={25} />
      </S.Pressable>
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
          <Edit product={dataProduct} handleAlertConfig={handleAlertConfig} />
          <Manage product={dataProduct} handleAlertConfig={handleAlertConfig} />
        </S.Stack>
      </S.ScrollView>
      <Alert
        {...alertConfig}
        onClose={() => handleAlertConfig({isOpen: false})}
      />
    </SharedLayout>
  );
}
