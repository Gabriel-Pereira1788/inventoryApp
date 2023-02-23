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
import {useModal} from '../../../hooks/useModal';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ModalDelete} from './components/ModalDelete/View';
import ProgressChart from '../../../components/ProgressChart/View';
import {Card} from '../../../components/Card/View';

export default function ManageProduct({
  route,
}: NavigationProps<'manageProduct'>) {
  const {product} = route.params;
  const {isOpen, handleToggleState} = useModal();
  const {alertConfig, dataProduct, handleAlertConfig} = useManageProduct({
    product,
  });
  return (
    <SharedLayout currentPath="products">
      <S.ScrollView
        mt="15%"
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        w="100%"
        px={5}>
        <S.VStack position="relative" w="100%" space={5}>
          <Card w="100%" py={10}>
            <S.HStack
              w="100%"
              alignItems="center"
              justifyContent="center"
              space={2}>
              <S.Text bold color="#b4b4b4" fontSize="3xl">
                {product.name_product}
              </S.Text>
              <S.Pressable
                position="absolute"
                right={5}
                _pressed={{opacity: 0.8}}
                onPress={handleToggleState}>
                <Ionicons name="trash" color="#f15858" size={25} />
              </S.Pressable>
            </S.HStack>
            <ProgressChart />
          </Card>

          <Edit product={dataProduct} handleAlertConfig={handleAlertConfig} />
          <Manage product={dataProduct} handleAlertConfig={handleAlertConfig} />
        </S.VStack>

        <ModalDelete
          isOpen={isOpen}
          onClose={handleToggleState}
          product={dataProduct}
        />
      </S.ScrollView>

      <Alert
        {...alertConfig}
        onClose={() => handleAlertConfig({isOpen: false})}
      />
    </SharedLayout>
  );
}
