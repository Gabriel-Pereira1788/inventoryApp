import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';

import {LayoutChangeEvent} from 'react-native';

import {Statistics} from '../../../../services/modules/Statistics/Statistics';
import {useUser} from '../../../../store/useUser';

const id = '8yBTG7BGJvS8QgQJUoPrFqIMbzA2';
export function useChart() {
  const user = useUser();
  const [chartParentWidth, setChartParentWidth] = useState<number>(0);

  const {
    data: statistics,
    isLoading,
    error,
  } = useQuery(['statisticsChart'], () =>
    Statistics.getStatisticsChart(user?.uid),
  );

  console.log(statistics);

  function handleParendWidth(e: LayoutChangeEvent) {
    const {nativeEvent} = e;
    setChartParentWidth(nativeEvent.layout.width);
  }

  const conditionRender = statistics && statistics?.labels.length > 0;

  return {statistics, isLoading, error, handleParendWidth, conditionRender};
}
