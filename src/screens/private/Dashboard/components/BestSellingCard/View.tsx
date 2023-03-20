import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {Card} from '../../../../../components/Card/View';
import {CurrencyFormat} from '../../../../../components/CurrencyFormat/View';
import {RenderIF} from '../../../../../components/RenderIF/View';
import Skeleton from './Skeleton';
//*icons
import FontIcons from 'react-native-vector-icons/FontAwesome5';
//*utils
import {formatDate} from '../../../../../utils/formatDate';
//*hooks
import {useBestSelling} from './useViewModel';
//*model
import {Product} from '../../../../../models/Product';
import {Selling} from '../../../../../models/Statistics';

export interface BestSellingProps {
  loadingData?: boolean;
  bestSelling?: {
    product: Product | null;
    data_sale: Selling | null;
  };
}

export function BestSellingCard({bestSelling, loadingData}: BestSellingProps) {
  const {total} = useBestSelling({bestSelling});

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
        <S.Text textAlign="center" fontWeight="400" color="#fff">
          Melhor venda
        </S.Text>
        <Skeleton condition={!!loadingData}>
          <RenderIF condition={!!bestSelling?.data_sale}>
            <S.Text
              textAlign="center"
              fontWeight="400"
              color="primary.300"
              fontSize="2xl">
              {bestSelling?.product?.name_product}
            </S.Text>

            <S.VStack w="100%" px={1} py={3} mt="3%" space={2}>
              <S.Text fontWeight="400" color="#fff" fontSize="sm">
                Vendidos:{' '}
                <S.Text fontWeight="400" color="primary.300" fontSize="sm">
                  {bestSelling?.data_sale?.pieces_saled}
                </S.Text>
              </S.Text>

              <S.Text fontWeight="400" color="#fff" fontSize="sm">
                Data:{' '}
                <S.Text fontWeight="400" color="primary.300" fontSize="sm">
                  {bestSelling?.data_sale &&
                    formatDate(new Date(bestSelling.data_sale.createdAt))}
                </S.Text>
              </S.Text>

              <S.Text fontWeight="400" color="#fff" fontSize="sm">
                Valor:{' '}
                <CurrencyFormat
                  value={total}
                  color="primary.300"
                  fontSize="sm"
                />
              </S.Text>

              <S.Text bold color="#fff" fontSize="sm">
                Preço de venda:{' '}
                <S.Text bold color="primary.300" fontSize="sm">
                  <CurrencyFormat
                    value={bestSelling?.product?.price_saled || 0}
                    color="primary.300"
                    fontSize="sm"
                  />
                </S.Text>
              </S.Text>

              <S.Text bold color="#fff" fontSize="sm">
                Preço de compra:{' '}
                <S.Text bold color="primary.300" fontSize="sm">
                  <CurrencyFormat
                    value={bestSelling?.product?.price_purchased || 0}
                    color="primary.300"
                    fontSize="sm"
                  />
                </S.Text>
              </S.Text>
            </S.VStack>
          </RenderIF>
        </Skeleton>
      </S.Pressable>
    </Card>
  );
}
