import React from 'react';
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Product as ProductDTO} from '../../../../../models/Product';
import {RenderIF} from '../../../../../components/RenderIF';

MaterialIcon.loadFont();
interface ProductProps extends ProductDTO {}

export default function Product({
  name_product,
  price_saled,
  storage,
}: ProductProps) {
  const isSlowStorage = storage <= 5;
  return (
    <S.HStack
      my={3}
      py={4}
      px={2}
      rounded="2xl"
      _light={{backgroundColor: '#fff'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      shadow={3}
      w="100%"
      position="relative"
      alignItems="center"
      // borderBottomWidth={1}
      // borderBottomColor="#dddddd"
    >
      <S.HStack
        px={2}
        py={1}
        backgroundColor={isSlowStorage ? '#c61049' : '#06a94d'}
        position="absolute"
        top={2}
        right={3}
        space={1}
        alignItems="center"
        justifyContent="center"
        rounded="md">
        <AntDesign
          name={isSlowStorage ? 'exclamation' : 'checkcircle'}
          size={15}
          color="#fff"
        />
        <RenderIF condition={isSlowStorage}>
          <S.Text fontSize="sm" bold color="#fff">
            Baixo estoque
          </S.Text>
        </RenderIF>
      </S.HStack>

      <S.Circle
        p={4}
        backgroundColor="#dddddd3d"
        alignItems="center"
        justifyContent="center">
        <S.Image
          source={require('../../../../../Assets/images/running-shoe.png')}
          width={30}
          height={30}
          alt="image"
        />
      </S.Circle>
      <S.VStack
        ml={2}
        alignItems="flex-start"
        justifyContent="center"
        space={2}>
        <S.Text bold fontSize="lg" mt={5}>
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
            color="#ddd"
          />
          <S.Text bold fontSize="md">
            {storage}
          </S.Text>
        </S.HStack>
      </S.VStack>
    </S.HStack>
  );
}
