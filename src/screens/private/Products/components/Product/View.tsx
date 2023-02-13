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
export interface ProductProps extends ProductDTO {}

export function Product({name_product, price_saled, storage}: ProductProps) {
  const {isLowStorage, productAnimation, circleAnimation, handleToggleVisible} =
    useProduct({
      storage,
    });
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
            {name_product}
          </S.Text>

          <S.HStack space={2} alignItems="center">
            <S.Text bold fontSize="lg" color="#7f7f7f">
              ${price_saled}
            </S.Text>

            <MaterialIcon
              style={{marginLeft: 10}}
              testID="iconProducts"
              name="inventory"
              size={25}
              color="#F0DC61"
            />
            <S.Text bold fontSize="md" color="#fff">
              {storage}
            </S.Text>
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
        <ProgressChart />
        <Button w="80%" opacity={1}>
          Gerenciar
        </Button>
      </S.VStack>
    </Animated.View>
  );
}
