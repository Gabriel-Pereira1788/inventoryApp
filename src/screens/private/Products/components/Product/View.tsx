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

MaterialIcon.loadFont();
export interface ProductProps extends ProductDTO {
  total_pieces_sales: number;
}

export function Product(props: ProductProps) {
  const {isLowStorage, productAnimation} = useProduct(props);
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
            <S.Text fontSize="sm" fontWeight={400} color="#fff">
              Baixo estoque
            </S.Text>
          </S.HStack>
        </RenderIF>
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
              width={(sizes.width / 100) * 25}
              height={(sizes.width / 100) * 25}
              rounded="md"
            />
          </RenderIF>
        </S.Box>
        <S.VStack
          ml={2}
          alignItems="flex-start"
          justifyContent="flex-start"
          space={2}>
          <S.Text fontWeight={500} fontSize="lg" color="text.100">
            {props.name_product}
          </S.Text>

          <S.HStack space={2} alignItems="center">
            <S.Text fontWeight={400} fontSize="lg" color="#928e8e">
              ${props.price_saled}
            </S.Text>
          </S.HStack>
        </S.VStack>
      </S.HStack>
    </Animated.View>
  );
}
