import * as S from 'native-base';
import React from 'react';
<<<<<<< HEAD
import {Button} from '../../../components/Button/View';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
//*types
import {NavigationProps} from '../../../routes/navigation';

import ContainerManagement from './components/ContainerManagement/View';
=======

//*components
import {SharedLayout} from '../../../components/SharedLayout';
import Manage from './components/Manage/View';
import {Alert} from '../../../components/Alert/View';
import {Edit} from './components/Edit/View';
import {ModalDelete} from './components/ModalDelete/View';
//*types
import {NavigationProps} from '../../../routes/navigation';
//*hooks
import {useManageProduct} from './useViewModel';
import {useModal} from '../../../hooks/useModal';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
>>>>>>> development

export default function ManageProduct({
  route,
}: NavigationProps<'manageProduct'>) {
  const {product} = route.params;
<<<<<<< HEAD
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
=======
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
          <S.VStack alignItems="flex-start" w="100%" my={2} space={5}>
            <S.HStack alignItems="center">
              <MaterialIcon
                style={{marginRight: 10}}
                testID="iconProducts"
                name="inventory"
                size={25}
                color="#F0DC61"
              />
              <S.Text bold fontSize="md" color="#bcbaba">
                {product.storage}
              </S.Text>
            </S.HStack>

            <S.HStack alignItems="center">
              <MaterialIcon
                style={{marginRight: 10}}
                testID="iconProducts"
                name="category"
                size={25}
                color="#F0DC61"
              />
              <S.Text
                textTransform="capitalize"
                bold
                fontSize="md"
                color="#bcbaba">
                {product.category}
              </S.Text>
            </S.HStack>

            <S.HStack alignItems="center">
              <MaterialIcon
                style={{marginRight: 10}}
                testID="iconProducts"
                name="attach-money"
                size={25}
                color="#c0f061"
              />
              <S.Text bold fontSize="md" color="#bcbaba">
                Preço de venda: R$
                {product.price_saled.toFixed(2)}
              </S.Text>
            </S.HStack>

            <S.HStack alignItems="center">
              <MaterialIcon
                style={{marginRight: 10}}
                testID="iconProducts"
                name="attach-money"
                size={25}
                color="#f07461be"
              />
              <S.Text bold fontSize="md" color="#bcbaba">
                Preço de compra: R$
                {product.price_purchased.toFixed(2)}
              </S.Text>
            </S.HStack>
          </S.VStack>

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
>>>>>>> development
    </SharedLayout>
  );
}
