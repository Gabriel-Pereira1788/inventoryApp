import React from 'react';
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
//*components
import {RenderIF} from '../../../../../components/RenderIF/View';
import {Product as ProductDTO} from '../../../../../models/Product';
import Animated, {BounceIn} from 'react-native-reanimated';
import {useProduct} from './useViewModel';
import {sizes} from '../../../../../constants/sizesDevice';
import {TouchableOpacity} from 'react-native';

MaterialIcon.loadFont();
export interface ProductProps extends ProductDTO {
  total_pieces_sales: number;
}

export function Product(props: ProductProps) {
  const {isLowStorage, redirectSingleProduct} = useProduct(props);
  return (
    <Animated.View
      entering={BounceIn.delay(100).duration(500)}
      style={[
        {
          padding: 10,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          marginVertical: 10,
          elevation: 1,
        },
      ]}>
      <RenderIF condition={isLowStorage}>
        <S.HStack
          px={2}
          py={1}
          backgroundColor={isLowStorage ? '#c61049' : '#06a94d'}
          position="absolute"
          top={0}
          right={0}
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
      <TouchableOpacity onPress={redirectSingleProduct}>
        <S.HStack position="relative" alignItems="center" my={2}>
          <S.Box>
            <RenderIF
              condition={!!props.path_image}
              RenderComponent={() => (
                <MaterialIcon
                  name="inventory"
                  size={(sizes.width / 100) * 25}
                  color="#ddd"
                />
              )}>
              <S.Image
                alt="image product"
                source={{
                  uri: props.path_image!,
                }}
                width={`${(sizes.width / 100) * 25}px`}
                height={`${(sizes.width / 100) * 25}px`}
                rounded="md"
              />
            </RenderIF>
          </S.Box>
          <S.VStack
            flex={1}
            ml={2}
            alignItems="center"
            justifyContent="center"
            space={2}>
            <S.Text fontWeight={500} fontSize="2xl" color="text.100">
              {props.name_product}
            </S.Text>

            <S.HStack space={4} alignItems="center">
              <S.Text fontWeight={400} fontSize="md" color="#928e8e">
                ${props.price_saled.toFixed(2)}
              </S.Text>
              <S.HStack space={1}>
                <MaterialIcon
                  testID="iconProducts"
                  name="inventory"
                  size={25}
                  color="#ddd"
                />
                <S.Text fontWeight={400} fontSize="md" color="#928e8e">
                  {props.storage}
                </S.Text>
              </S.HStack>
            </S.HStack>
          </S.VStack>
        </S.HStack>
      </TouchableOpacity>
    </Animated.View>
  );
}
