import {useRef, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useUser} from '../../../store/useUser';
import {Statistics} from './model';

export type FilterDate =
  | 'day'
  | 'week'
  | 'month'
  | '3 month'
  | '6 month'
  | 'year';

export function useDashboard() {
  // const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
  const user = useUser();

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

  return {
    statistics,
    changeFilter,
    currentFilter,
    isLoading,
    error,
    statisticApi,
  };
}
