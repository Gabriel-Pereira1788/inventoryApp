import {HStack} from 'native-base';
import React, {useState} from 'react';
import {withPreConf} from '../../../../../hooks/withPreConf';
import {Card} from '../../../../../components/Card';
import {FilterGraph} from '../FilterGraph';

export type FilterDate =
  | 'day'
  | 'week'
  | 'month'
  | '3 month'
  | '6 month'
  | 'year';

export function GraphSales() {
  const [currentFilter, setCurrentFilter] = useState<FilterDate>('day');

  function changeFilter(filter: FilterDate): void {
    setCurrentFilter(filter);
  }

  const FilterPreConfig = withPreConf(FilterGraph, {
    changeFilter,
    currentFilter,
  });

  return (
    <Card w="100%" h="80" overflow="hidden">
      <HStack w="100%">
        <FilterPreConfig identifier="day">1d</FilterPreConfig>
        <FilterPreConfig identifier="week">1w</FilterPreConfig>
        <FilterPreConfig identifier="month">1m</FilterPreConfig>
        <FilterPreConfig identifier="3 month">3m</FilterPreConfig>
        <FilterPreConfig identifier="6 month">6m</FilterPreConfig>
        <FilterPreConfig identifier="year">1y</FilterPreConfig>
      </HStack>
    </Card>
  );
}
