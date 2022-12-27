import React from 'react';
import {HStack, ScrollView, VStack} from 'native-base';

//*components
import {DataCard} from './components/DataCard';
import {SharedLayout} from '../../../components/SharedLayout';
import {Card} from '../../../components/Card';
//*hooks
import {useDashboard} from './hooks/useDashboard';

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function Dashboard() {
  const {statistics, Filter} = useDashboard(id);

  return (
    <SharedLayout>
      <ScrollView
        p={3}
        mt="15%"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <VStack w="100%" space="4">
          <HStack
            w="100%"
            alignItems="center"
            justifyContent="center"
            space="5">
            <DataCard />
            <DataCard />
          </HStack>
          <Card w="100%" h="80" overflow="hidden">
            <HStack w="100%">
              <Filter identifier="day">1d</Filter>
              <Filter identifier="week">1w</Filter>
              <Filter identifier="month">1m</Filter>
              <Filter identifier="3 month">3m</Filter>
              <Filter identifier="6 month">6m</Filter>
              <Filter identifier="year">1y</Filter>
            </HStack>
          </Card>
        </VStack>
      </ScrollView>
    </SharedLayout>
  );
}
