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
export interface ProductProps extends ProductDTO {
  total_pieces_sales: number;
}

export function Product(props: ProductProps) {
  const {
    isLowStorage,
    storagePercentage,
    piecesSaledPercentage,
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
          width: '100%',
          padding: 10,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          marginVertical: 10,
          height: 'auto',
          elevation: 1,
        },
      ]}>
      <S.HStack width="100%" position="relative" alignItems="center" my={2}>
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
            <S.Text fontSize="sm" fontWeight={400} color="#fff">
              Baixo estoque
            </S.Text>
          </S.HStack>
        </RenderIF>
        <S.Box>
          <S.Image
            alt="image product"
            source={{
              uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            }}
            width={100}
            height={100}
            rounded="md"
          />
        </S.Box>
        <S.VStack
          ml={2}
          alignItems="flex-start"
          justifyContent="flex-start"
          space={2}>
          <S.Text fontWeight={400} fontSize="lg" color="#0e0e0e">
            {props.name_product}
          </S.Text>

          {/*  <S.HStack space={2} alignItems="center">
            <S.Text fontWeight={400} fontSize="lg" color="#bdbaba">
              ${props.price_saled}
            </S.Text>

            <MaterialIcon
              style={{marginLeft: 10}}
              testID="iconProducts"
              name="inventory"
              size={25}
              color="#F0DC61"
            />
            <S.Text fontWeight={400} fontSize="md" color="#bcbaba">
              {props.storage}
            </S.Text>

            <MaterialIcon
              style={{marginLeft: 5}}
              name="category"
              size={25}
              color="#F0DC61"
            />

            <S.Text
              fontWeight={400}
              fontSize="md"
              color="#bfbcbc"
              textTransform="capitalize">
              {props.category}
            </S.Text>
          </S.HStack> */}
        </S.VStack>

        {/*   <S.Pressable
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
        </S.Pressable> */}
      </S.HStack>

      {/*       <S.VStack
        w="100%"
        h="100%"
        mt={15}
        alignItems="center"
        justifyContent="flex-start"
        space={3}>
        <ProgressChart
          salesPercentage={piecesSaledPercentage}
          storagePercentage={storagePercentage}
        />
        <Button w="80%" opacity={1} onPress={handleManageProduct}>
          Gerenciar
        </Button>
      </S.VStack> */}
    </Animated.View>
  );
}
