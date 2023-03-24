import React, {createContext, useContext} from 'react';
//*styles
import * as S from 'native-base';
//*components
import {SharedLayout} from '../../../components/SharedLayout';
import {BestSellingCard} from './components/BestSellingCard/View';
import {LineChart} from './components/LineChart/View';
import {FilterGraph} from './components/FilterGraph/View';
import {CurrencyFormat} from '../../../components/CurrencyFormat/View';
import {ContainerCards} from './components/ContainerCards/View';
import {IsMounted} from '../../../components/IsMounted/View';
import Header from './components/Header/View';
//*hooks
import {useDashboard} from './useViewModel';
import {NavigationProps} from '../../../routes/navigation';

type Context = Pick<ReturnType<typeof useDashboard>, 'statisticApi'>;

const DashboardContext = createContext({} as Context);

export function Dashboard(propsNavigation: NavigationProps) {
  const {statistics, changeFilter, currentFilter, isLoading, ...rest} =
    useDashboard();

  return (
    <DashboardContext.Provider value={{...rest}}>
      <IsMounted propsNavigation={propsNavigation}>
        <SharedLayout currentPath="dashboard" py={0}>
          <S.ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <S.VStack w="100%" space="4" justifyContent="center">
              <Header
                salesAmount={statistics?.total_sales}
                currentFilter={currentFilter}
              />
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
              </S.VStack>

              <S.Box>
                <LineChart currentFilter={currentFilter} />
              </S.Box>
            </S.VStack>

            {/*     <BestSellingCard
              bestSelling={statistics?.best_selling}
              loadingData={isLoading}
            /> */}
          </S.ScrollView>
        </SharedLayout>
      </IsMounted>
    </DashboardContext.Provider>
  );
}

export function useDashboardContext() {
  return useContext(DashboardContext);
}
