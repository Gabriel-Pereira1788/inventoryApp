import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Statistics} from '../../../../services/modules/Statistics/Statistics';
import {useUser} from '../../../../store/useUser';

export type FilterDate =
  | 'day'
  | 'week'
  | 'month'
  | '3 month'
  | '6 month'
  | 'year';
export function useDashboard(id: string) {
  const user = useUser();
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
    () => Statistics.getStatistics(user?.uid, currentFilter),
    {refetchOnMount: false},
  );

  return {statistics, changeFilter, currentFilter, isLoading, error};
}
