import React from 'react';
import {HStack, ScrollView, VStack} from 'native-base';
//*models
import {User} from '../../../models/Auth';
//*components
import {DataCard} from './components/DataCard';
import {GraphSales} from './components/GraphSales';
import {SharedLayout} from '../../../components/SharedLayout';
import {useQuery} from '@tanstack/react-query';
import {Statistics} from '../../../services/modules/Statistics/Statistics';

interface Props {
  user?: User;
}

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function Dashboard({user}: Props) {
  const {data: statistics} = useQuery(
    ['statistics'],
    () => Statistics.getStatistics(id),
    {refetchOnMount: false, keepPreviousData: true},
  );

  console.log(user);
  console.log(statistics);
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
          <GraphSales />
        </VStack>
      </ScrollView>
    </SharedLayout>
  );
}
