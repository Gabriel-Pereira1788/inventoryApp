import React from 'react';
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
//*components
import {RenderIF} from '../../../../../components/RenderIF/View';
import ProgressChart from '../../../../../components/ProgressChart/View';

import {Product as ProductDTO} from '../../../../../models/Product';
import Animated, {BounceIn} from 'react-native-reanimated';
import {useProduct} from './useViewModel';
import {Button} from '../../../../../components/Button/View';

MaterialIcon.loadFont();
<<<<<<< HEAD
export interface ProductProps extends ProductDTO {}

export function Product(props: ProductDTO) {
  const {
    isLowStorage,
=======
export interface ProductProps extends ProductDTO {
  total_pieces_sales: number;
}

export function Product(props: ProductProps) {
  const {
    isLowStorage,
    storagePercentage,
    piecesSaledPercentage,
>>>>>>> development
    productAnimation,
    circleAnimation,
    handleToggleVisible,
    handleManageProduct,
  } = useProduct(props);
  return (
    <Animated.View
      entering={BounceIn.delay(100).duration(500)}
      style={[
        productAnimation,
        {
          padding: 10,
          backgroundColor: '#545353',
          borderRadius: 10,
          marginVertical: 10,
          overflow: 'hidden',
<<<<<<< HEAD
=======
          elevation: 3,
>>>>>>> development
        },
      ]}>
      <S.HStack position="relative" alignItems="center" my={2}>
        <RenderIF condition={isLowStorage}>
          <S.HStack
            px={2}
            py={1}
            backgroundColor={isLowStorage ? '#c61049' : '#06a94d'}
            position="absolute"
            top={2}
            right={3}
            space={1}
            alignItems="center"
            justifyContent="center"
            rounded="md">
            <AntDesign
              name={isLowStorage ? 'exclamation' : 'checkcircle'}
              size={15}
              color="#fff"
            />
            <S.Text fontSize="sm" bold color="#fff">
              Baixo estoque
            </S.Text>
          </S.HStack>
        </RenderIF>

        <S.VStack
          w="100%"
          ml={2}
          alignItems="flex-start"
          justifyContent="flex-start"
          space={2}>
          <S.Text bold fontSize="lg" color="#fff">
            {props.name_product}
          </S.Text>

          <S.HStack space={2} alignItems="center">
<<<<<<< HEAD
            <S.Text bold fontSize="lg" color="#7f7f7f">
=======
            <S.Text bold fontSize="lg" color="#bdbaba">
>>>>>>> development
              ${props.price_saled}
            </S.Text>

            <MaterialIcon
              style={{marginLeft: 10}}
              testID="iconProducts"
              name="inventory"
              size={25}
              color="#F0DC61"
            />
<<<<<<< HEAD
            <S.Text bold fontSize="md" color="#fff">
              {props.storage}
            </S.Text>
=======
            <S.Text bold fontSize="md" color="#bcbaba">
              {props.storage}
            </S.Text>

            <MaterialIcon
              style={{marginLeft: 5}}
              name="category"
              size={25}
              color="#F0DC61"
            />

            <S.Text
              bold
              fontSize="md"
              color="#bfbcbc"
              textTransform="capitalize">
              {props.category}
            </S.Text>
>>>>>>> development
          </S.HStack>
        </S.VStack>

        <S.Pressable
          onPress={handleToggleVisible}
          _pressed={{opacity: 0.8}}
          alignItems="center"
          justifyContent="center">
          <Animated.View
            style={[
              circleAnimation,
              {
                padding: 5,
                position: 'absolute',
                right: 10,
                borderWidth: 1,
                borderRadius: 100,
                borderColor: '#c2c1c1b7',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <MaterialIcon
              name="keyboard-arrow-down"
              color="#dddddda7"
              size={25}
            />
          </Animated.View>
        </S.Pressable>
      </S.HStack>

      <S.VStack
        w="100%"
        h="100%"
        mt={15}
        alignItems="center"
        justifyContent="flex-start"
        space={3}>
<<<<<<< HEAD
        <ProgressChart />
=======
        <ProgressChart
          salesPercentage={piecesSaledPercentage}
          storagePercentage={storagePercentage}
        />
>>>>>>> development
        <Button w="80%" opacity={1} onPress={handleManageProduct}>
          Gerenciar
        </Button>
      </S.VStack>
    </Animated.View>
  );
}
