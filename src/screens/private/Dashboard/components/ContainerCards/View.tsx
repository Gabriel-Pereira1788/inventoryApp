import React from 'react';
import * as S from 'native-base';
import {StatisticsDTO} from '../../../../../models/Statistics';
import {DataCard} from '../DataCard/View';

type ContainerProps = {
  statistics?: StatisticsDTO;
  isLoading: boolean;
};

export function ContainerCards({statistics, isLoading}: ContainerProps) {
  console.log(statistics);
  return (
    <S.VStack
      space={4}
      w="100%"
      alignItems="center"
      justifyContent="center"
      mt={5}>
      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="center"
        space="3"
        px={2}>
        <DataCard
          loadingData={isLoading}
          _light={{backgroundColor: 'primary.400'}}
          _dark={{backgroundColor: 'primary.500'}}
          data={statistics?.parts_entered}
          textCard="Produtos que entraram"
        />
        <DataCard
          loadingData={isLoading}
          backgroundColor="dark.300"
          opacity={0.7}
          data={statistics?.parts_leave}
          textCard="Produtos que sairam"
        />
      </S.HStack>

      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="center"
        space="3"
        px={2}>
        <DataCard
          loadingData={isLoading}
          backgroundColor="dark.300"
          opacity={0.7}
          data={statistics?.total_product}
          textCard="Total em produtos"
        />
        <DataCard
          loadingData={isLoading}
          _light={{backgroundColor: 'primary.400'}}
          _dark={{backgroundColor: 'primary.500'}}
          data={statistics?.total_storage}
          textCard="Total em estoque"
        />
      </S.HStack>
    </S.VStack>
  );
}
