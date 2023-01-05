import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {DataCard} from './components/DataCard';
import {SharedLayout} from '../../../components/SharedLayout';
//*hooks
import {useDashboard} from './hooks/useDashboard';
import BestSellingCard from './components/BestSellingCard';
import LineChart from './components/LineChart';
import {FilterGraph} from './components/FilterGraph';

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function Dashboard() {
  const {statistics, changeFilter, currentFilter, isLoading} = useDashboard(id);

  console.log(statistics);
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
          <S.HStack
            w="100%"
            p={2}
            alignItems="center"
            justifyContent="center"
            space="3">
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
          <S.VStack w="100%" overflow="hidden" mt={5}>
            <S.HStack w="100%">
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

            <S.Text bold mt={10} ml={'2%'} fontSize="md">
              Total: {statistics?.total_sales || 0}
            </S.Text>
          </S.VStack>
          <LineChart />
        </S.VStack>
        <BestSellingCard bestSelling={statistics?.best_selling} />
      </S.ScrollView>
    </SharedLayout>
  );
}
