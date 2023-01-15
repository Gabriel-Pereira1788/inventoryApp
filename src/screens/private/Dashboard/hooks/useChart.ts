import {useQuery} from '@tanstack/react-query';
import {Statistics} from '../../../../services/modules/Statistics/Statistics';
import {useUser} from '../../../../store/useUser';

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function useChart() {
  const user = useUser();

  const {
    data: statistics,
    isLoading,
    error,
  } = useQuery(['statisticsChart'], () => Statistics.getStatisticsChart(id));

  console.log(statistics);

  const conditionRender = statistics && statistics?.labels.length > 0;

  return {statistics, isLoading, error, conditionRender};
}
