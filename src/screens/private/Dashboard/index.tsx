import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {DataCard} from './components/DataCard';
import {SharedLayout} from '../../../components/SharedLayout';
//*hooks
import {useDashboard} from './hooks/useDashboard';
import BestSellingCard from './components/BestSellingCard';

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function Dashboard() {
  const {statistics, Filter} = useDashboard(id);

  return (
    <SharedLayout>
      <S.ScrollView
        p={3}
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
              _light={{backgroundColor: 'primary.400'}}
              _dark={{backgroundColor: 'primary.500'}}
              textCard="Produtos que entraram"
            />
            <DataCard
              backgroundColor="dark.300"
              opacity={0.7}
              textCard="Produtos que sairam"
            />
          </S.HStack>
          <S.VStack w="100%" h="80" overflow="hidden" mt={5}>
            <S.HStack w="100%">
              <Filter identifier="day">1d</Filter>
              <Filter identifier="week">1w</Filter>
              <Filter identifier="month">1m</Filter>
              <Filter identifier="3 month">3m</Filter>
              <Filter identifier="6 month">6m</Filter>
              <Filter identifier="year">1y</Filter>
            </S.HStack>

            <S.Text bold mt={10} ml={'2%'} fontSize="md">
              Total: R$ 27.767,53
            </S.Text>
          </S.VStack>
        </S.VStack>
        <BestSellingCard />
      </S.ScrollView>
    </SharedLayout>
  );
}
