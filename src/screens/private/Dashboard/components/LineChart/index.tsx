import React, {useState} from 'react';
import * as S from 'native-base';
import {LineChart as LChart} from 'react-native-chart-kit';

type Props = {};

const dataChart = [
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
  Math.random() * 100,
];

export default function LineChart({}: Props) {
  const [chartParentWidth, setChartParentWidth] = useState<number>(0);
  return (
    <S.Box
      alignItems="center"
      justifyContent="center"
      width="full"
      mt="10%"
      onLayout={({nativeEvent}) => {
        setChartParentWidth(nativeEvent.layout.width);
      }}>
      <LChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: dataChart,
            },
          ],
        }}
        fromZero
        width={chartParentWidth}
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
    </S.Box>
  );
}
