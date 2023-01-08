import React from 'react';
import {Dimensions} from 'react-native';
//*styles
import * as S from 'native-base';
import {LineChart as LChart} from 'react-native-chart-kit';
//*hooks
import {useChart} from '../../hooks/useChart';
//*components
import EmptyMessage from '../../../../../components/EmptyMessage';
import {RenderIF} from '../../../../../components/RenderIF';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';
//*constants
import {EMPTY_MESSAGES} from '../../../../../constants/emptyMessages';

Ionicons.loadFont();
type Props = {};

export default function LineChart({}: Props) {
  const {statistics, conditionRender} = useChart();

  return (
    <S.Box alignItems="center" justifyContent="center" width="full" mt="10%">
      <RenderIF
        condition={!!conditionRender}
        RenderComponent={() => (
          <EmptyMessage message={EMPTY_MESSAGES.statistics}>
            <Ionicons name="ios-bar-chart" size={120} color="#F0DC61" />
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
          height={250}
          chartConfig={{
            strokeWidth: 3,
            barPercentage: 0.5,
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            backgroundColor: '#F9F6F6',
            labelColor: () => '#8a8a8a',
            color: () => '#F0DC61',
          }}
          bezier
          withInnerLines={false}
          withOuterLines={false}
        />
      </RenderIF>
    </S.Box>
  );
}
