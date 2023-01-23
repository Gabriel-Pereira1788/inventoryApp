import React from 'react';
//*styles
import * as S from 'native-base';
//*components

import {SharedLayout} from '../../../components/SharedLayout';
import {BestSellingCard} from './components/BestSellingCard';
import {LineChart} from './components/LineChart';
import {FilterGraph} from './components/FilterGraph';
import {CurrencyFormat} from '../../../components/CurrencyFormat';
import {ContainerCards} from './components/ContainerCards';
//*hooks
import {useDashboard} from './hooks/useDashboard';

export function Dashboard() {
  const {statistics, changeFilter, currentFilter, isLoading} = useDashboard();
  // console.log(statistics);
  return (
    <SharedLayout currentPath="dashboard">
      <S.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <S.VStack w="100%" space="4" mt={10}>
          <ContainerCards statistics={statistics} isLoading={isLoading} />

          <S.VStack w="100%" overflow="hidden" mt={5}>
            <S.HStack
              w="100%"
              alignItems="center"
              space={2}
              justifyContent="center">
              <FilterGraph
                identifier="day"
                changeFilter={changeFilter}
                currentFilter={currentFilter}>
                1d
              </FilterGraph>
              <FilterGraph
                identifier="week"
                changeFilter={changeFilter}
                currentFilter={currentFilter}>
                1w
              </FilterGraph>
              <FilterGraph
                identifier="month"
                changeFilter={changeFilter}
                currentFilter={currentFilter}>
                1m
              </FilterGraph>
              <FilterGraph
                identifier="3 month"
                changeFilter={changeFilter}
                currentFilter={currentFilter}>
                3m
              </FilterGraph>
              <FilterGraph
                identifier="6 month"
                changeFilter={changeFilter}
                currentFilter={currentFilter}>
                6m
              </FilterGraph>
              <FilterGraph
                identifier="year"
                changeFilter={changeFilter}
                currentFilter={currentFilter}>
                1y
              </FilterGraph>
            </S.HStack>
            <S.Text bold mt={10} ml={'5%'} fontSize="md" testID="total-sale">
              Total: <CurrencyFormat value={statistics?.total_sales || 0} />
            </S.Text>
          </S.VStack>

          <S.Box>
            <LineChart />
          </S.Box>
        </S.VStack>
        <BestSellingCard
          bestSelling={statistics?.best_selling}
          loadingData={isLoading}
        />
      </S.ScrollView>
    </SharedLayout>
  );
}
