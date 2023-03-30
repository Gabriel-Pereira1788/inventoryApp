import React from 'react';
import * as S from 'native-base';
import {StatisticsDTO} from '../../../../../models/Statistics';
import {DataCard} from '../DataCard/View';

type ContainerProps = {
  statistics?: StatisticsDTO | null;
  isLoading: boolean;
};

export function ContainerCards({statistics, isLoading}: ContainerProps) {
  return (
    <S.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      }}>
      <DataCard
        testLoadingId="loading-card-0"
        mx={4}
        loadingData={isLoading}
        background="#fff"
        data={statistics?.parts_entered}
        textCard="Produtos que entraram"
      />
      <DataCard
        testLoadingId="loading-card-1"
        mx={4}
        loadingData={isLoading}
        background="#fff"
        data={statistics?.parts_leave}
        textCard="Produtos que sairam"
      />

      <DataCard
        testLoadingId="loading-card-2"
        mx={4}
        loadingData={isLoading}
        background="#fff"
        data={statistics?.total_product}
        textCard="Total em produtos"
      />
      <DataCard
        testLoadingId="loading-card-3"
        mx={4}
        loadingData={isLoading}
        background="#fff"
        data={statistics?.total_storage}
        textCard="Total em estoque"
      />
    </S.ScrollView>
  );
}
