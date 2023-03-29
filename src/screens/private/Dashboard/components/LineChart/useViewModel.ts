import {useQuery} from '@tanstack/react-query';

import {useUser} from '../../../../../store/useUser';

import {useDashboardContext} from '../../View';
import {LineChartProps} from './View';

type UseChartProps = Pick<LineChartProps, 'sales' | 'currentFilter'>;

export function useChart({}: UseChartProps) {
  const {statisticApi} = useDashboardContext();

  const user = useUser();
  const {
    data: statistics,
    isLoading,
    error,
  } = useQuery(
    ['statisticsChart'],
    () => statisticApi.getStatisticsChart(user?.uid),
    {
      refetchOnMount: false,
    },
  );

  const conditionRender = statistics && statistics?.labels.length > 0;

  return {statistics, isLoading, error, conditionRender};
}
