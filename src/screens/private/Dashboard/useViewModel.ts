import {useEffect, useRef, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useUser} from '../../../store/useUser';
import {useNavigation} from '@react-navigation/native';
import {Statistics} from './model';

export type FilterDate =
  | 'day'
  | 'week'
  | 'month'
  | '3 month'
  | '6 month'
  | 'year';

export function useDashboard() {
  const user = useUser();
  const navigation = useNavigation();

  const statisticApi = useRef<Statistics>(new Statistics(user?.uid)).current;
  const [currentFilter, setCurrentFilter] = useState<FilterDate>('day');

  function changeFilter(filter: FilterDate): void {
    setCurrentFilter(filter);
  }

  const {
    data: statistics,
    isLoading,
    error,
  } = useQuery(
    ['statistics', currentFilter],
    () => statisticApi.get(currentFilter),
    {
      refetchOnMount: false,
    },
  );

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, [navigation]);

  return {
    statistics,
    changeFilter,
    currentFilter,
    isLoading,
    error,
    statisticApi,
  };
}
