import React from 'react';
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

MaterialIcon.loadFont();
interface ProductProps {}

export default function Product(props: ProductProps) {
  return (
    <S.HStack
      py={4}
      px={4}
      rounded="2xl"
      _light={{backgroundColor: '#fff'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      shadow={3}
      w="100%"
      position="relative">
      <S.HStack
        px={2}
        py={1}
        backgroundColor="#DEFFB4"
        position="absolute"
        top={2}
        right={3}
        space={1}
        alignItems="center"
        justifyContent="center"
        rounded="md">
        <AntDesign name="checkcircle" size={15} color="#fff" />
        <S.Text fontSize="sm" bold color="#fff">
          Em estoque
        </S.Text>
      </S.HStack>

      <S.Circle
        p={4}
        backgroundColor="#ddd"
        alignItems="center"
        justifyContent="center">
        <S.Image
          source={require('../../../../../Assets/images/camisa.png')}
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
        <S.Text bold fontSize="xl">
          Nike Shoes
        </S.Text>

        <S.HStack space={2} alignItems="center">
          <S.Text bold fontSize="lg" color="#7f7f7f">
            $123
          </S.Text>

          <MaterialIcon
            style={{marginLeft: 10}}
            testID="iconProducts"
            name="inventory"
            size={25}
            color="#ddd"
          />
          <S.Text bold fontSize="md">
            35
          </S.Text>
        </S.HStack>
      </S.VStack>
    </S.HStack>
  );
}
