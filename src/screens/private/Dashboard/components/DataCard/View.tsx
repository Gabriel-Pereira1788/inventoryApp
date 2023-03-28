import React from 'react';
//*styles
import * as S from 'native-base';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcons from 'react-native-vector-icons/FontAwesome5';
//*components
import {Skeleton} from './Skeleton';
//*animatino
import Animated, {BounceIn} from 'react-native-reanimated';

const Icons = {
  'Produtos que entraram': () => (
    <Ionicons
      name="pie-chart-sharp"
      size={30}
      color="#102f3b"
      testID="iconChart"
    />
  ),
  'Produtos que sairam': () => (
    <FontIcons name="chart-pie" size={27} color="#102f3b" testID="iconChart" />
  ),
  'Total em produtos': () => (
    <MaterialIcon
      testID="iconProducts"
      name="inventory"
      style={{marginRight: 10}}
      size={27}
      color="#102f3b"
    />
  ),
  'Total em estoque': () => (
    <FontIcons name="chart-pie" size={27} color="#102f3b" testID="iconChart" />
  ),
};

export type DataCardProps<T> = S.IStackProps & {
  textCard: T;
  data?: number;
  loadingData?: boolean;
};

export function DataCard({
  textCard,
  loadingData,
  data,
  ...rest
}: DataCardProps<keyof typeof Icons>) {
  return (
    <Skeleton
      conditionRender={loadingData}
      minW="40"
      minH="40"
      rounded="xl"
      space="2"
      shadow={1}
      {...rest}>
      <Animated.View entering={BounceIn}>
        <S.VStack
          py={4}
          px={4}
          minW="40"
          space="2"
          rounded="xl"
          {...rest}
          shadow="1">
          <S.HStack w="100%" alignItems="center" justifyContent="flex-start">
            {Icons[textCard]()}
          </S.HStack>

          <S.Text
            fontWeight="400"
            fontSize="3xl"
            color="text.100"
            textAlign="left"
            testID="data-value">
            {data ? data : 0}
          </S.Text>

          <S.Text
            fontWeight="500"
            fontSize="sm"
            color="text.100"
            textAlign="left"
            shadow="4"
            testID="text-card">
            {textCard}
          </S.Text>
        </S.VStack>
      </Animated.View>
    </Skeleton>
  );
}
