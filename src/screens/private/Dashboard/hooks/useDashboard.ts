import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Statistics} from '../../../../services/modules/Statistics/Statistics';
import {useUser} from '../../../../store/useUser';

import {FilterGraph} from '../components/FilterGraph';
import {withPreConf} from '../../../../hooks/withPreConf';

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

  const Filter = withPreConf(FilterGraph, {
    changeFilter,
    currentFilter,
  });

  const {data: statistics} = useQuery(
    ['statistics'],
    () => Statistics.getStatistics(id),
    {refetchOnMount: false, keepPreviousData: true},
  );

  return {statistics, changeFilter, Filter};
}
