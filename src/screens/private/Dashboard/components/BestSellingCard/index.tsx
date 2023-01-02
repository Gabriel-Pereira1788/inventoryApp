import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {Card} from '../../../../../components/Card';
//*icons

import FontIcons from 'react-native-vector-icons/FontAwesome5';

type Props = {};

export default function BestSellingCard({}: Props) {
  return (
    <Card
      _light={{backgroundColor: 'dark.300'}}
      w="80%"
      position="relative"
      mt={10}
      mb="15%"
      rounded="3xl">
      <S.Pressable _pressed={{opacity: 0.8, backgroundColor: '#6a6969'}} p={4}>
        <S.Box position="absolute" left={5} top={0}>
          <FontIcons name="medal" size={20} color="#F0DC61" />
        </S.Box>
        <S.Text textAlign="center" bold color="#fff">
          Melhor venda
        </S.Text>
        <S.Text textAlign="center" bold color="primary.300" fontSize="2xl">
          Nike Shoes
        </S.Text>
        <S.VStack w="100%" px={1} py={3} mt="3%" space={2}>
          <S.Text bold color="#fff" fontSize="sm">
            Vendidos:{' '}
            <S.Text bold color="primary.300" fontSize="sm">
              33
            </S.Text>
          </S.Text>
          <S.Text bold color="#fff" fontSize="sm">
            Data:{' '}
            <S.Text bold color="primary.300" fontSize="sm">
              21/12/2022
            </S.Text>
          </S.Text>
          <S.Text bold color="#fff" fontSize="sm">
            Valor:{' '}
            <S.Text bold color="primary.300" fontSize="sm">
              253,33
            </S.Text>
          </S.Text>
          <S.Text bold color="#fff" fontSize="sm">
            Preço de venda:{' '}
            <S.Text bold color="primary.300" fontSize="sm">
              253.33
            </S.Text>
          </S.Text>
          <S.Text bold color="#fff" fontSize="sm">
            Preço de compra:{' '}
            <S.Text bold color="primary.300" fontSize="sm">
              153.33
            </S.Text>
          </S.Text>
        </S.VStack>
      </S.Pressable>
    </Card>
  );
}
