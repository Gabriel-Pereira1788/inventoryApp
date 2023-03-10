import React from 'react';
import {ProgressChart as PChart} from 'react-native-chart-kit';
import * as S from 'native-base';

<<<<<<< HEAD
interface ProgressChartProps {}

const data = {
  data: [0.6, 0.8],
  colors: ['#f89898', '#fff4af'],
};

export default function ProgressChart({}: ProgressChartProps) {
=======
interface ProgressChartProps {
  salesPercentage: number;
  storagePercentage: number;
}

export default function ProgressChart({
  salesPercentage,
  storagePercentage,
}: ProgressChartProps) {
  const data = {
    data: [salesPercentage / 100, storagePercentage / 100],
    colors: ['#f89898', '#fff4af'],
  };
>>>>>>> development
  return (
    <S.VStack w="100%" alignItems="center">
      <PChart
        data={data}
        width={250}
        height={150}
        strokeWidth={12}
        hasLegend={true}
        withCustomBarColorFromData={true}
        radius={35}
        chartConfig={{
          verticalLabelRotation: 110,
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,

          paddingRight: 15,
          propsForLabels: {fill: '#ddd'},
          decimalPlaces: 1,
          color: () => '#dddddd62',
        }}
      />
      <S.HStack w="100%" space={5} alignItems="center" justifyContent="center">
        <S.Text bold color="#f89898">
          Saidas
        </S.Text>
        <S.Text bold color="#fff4af">
          Estoque
        </S.Text>
      </S.HStack>
    </S.VStack>
  );
}
