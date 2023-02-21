import {useQuery} from '@tanstack/react-query';
import {useDashboardContext} from '../../View';

export function useChart() {
  const {statisticApi} = useDashboardContext();

  const {
    data: statistics,
    isLoading,
    error,
  } = useQuery(['statisticsChart'], statisticApi.getStatisticsChart);

  const conditionRender = statistics && statistics?.labels.length > 0;

  return {statistics, isLoading, error, conditionRender};
}
