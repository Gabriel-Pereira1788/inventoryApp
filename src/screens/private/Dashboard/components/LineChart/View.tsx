import React from 'react';
import {Dimensions} from 'react-native';
//*styles
import * as S from 'native-base';
import {LineChart as LChart} from 'react-native-chart-kit';
//*hooks
import {useChart} from './useViewModel';
//*components
import EmptyMessage from '../../../../../components/EmptyMessage/View';
import {RenderIF} from '../../../../../components/RenderIF/View';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';
//*constants
import {EMPTY_MESSAGES} from '../../../../../constants/defaultTexts';
import {Selling} from '../../../../../models/Statistics';
import {FilterDate} from '../../useViewModel';

Ionicons.loadFont();

export interface LineChartProps {
  sales?: Selling[];
  currentFilter: FilterDate;
}

export function LineChart(props: LineChartProps) {
  const {statistics, conditionRender} = useChart(props);

  return (
    <S.Box
      testID="chart-wrapper"
      alignItems="center"
      justifyContent="center"
      width="full"
      mt="10%">
      <RenderIF
        condition={!!conditionRender}
        RenderComponent={() => (
          <EmptyMessage message={EMPTY_MESSAGES.statistics}>
            <Ionicons
              name="ios-bar-chart"
              size={120}
              color="#81eefc"
              testID="icon-chart"
            />
          </EmptyMessage>
        )}>
        <LChart
          data={{
            labels: statistics?.labels ? statistics!.labels : ['jan'],
            datasets: [
              {
                data: statistics?.values ? statistics!.values : [0],
              },
            ],
          }}
          fromZero
          width={Dimensions.get('window').width}
          style={{padding: 5}}
          height={250}
          chartConfig={{
            strokeWidth: 3,
            barPercentage: 0.5,
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            backgroundColor: '#F9F6F6',
            labelColor: () => '#8a8a8a',
            color: () => '#81eefc',
          }}
          bezier
          withInnerLines={false}
          withOuterLines={false}
        />
      </RenderIF>
    </S.Box>
  );
}
