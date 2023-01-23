import React from 'react';
//*styles
import * as S from 'native-base';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcons from 'react-native-vector-icons/FontAwesome5';
import {Skeleton} from './Skeleton';

const Icons = {
  'Produtos que entraram': () => (
    <Ionicons
      name="pie-chart-sharp"
      size={27}
      color="#fff"
      testID="iconChart"
    />
  ),
  'Produtos que sairam': () => (
    <FontIcons name="chart-pie" size={25} color="#fff" testID="iconChart" />
  ),
  'Total em produtos': () => (
    <MaterialIcon
      testID="iconProducts"
      name="inventory"
      style={{marginRight: 10}}
      size={25}
      color="#fff"
    />
  ),
  'Total em estoque': () => (
    <FontIcons name="chart-pie" size={25} color="#fff" testID="iconChart" />
  ),
};

type IconsCard = typeof Icons;

interface Props extends S.IStackProps {
  textCard: keyof IconsCard;
  data?: number;
  loadingData?: boolean;
}

export function DataCard({textCard, loadingData, data, ...rest}: Props) {
  return (
    <Skeleton
      conditionRender={loadingData}
      minW="40"
      minH="40"
      rounded="xl"
      space="2"
      shadow={4}
      {...rest}>
      <S.VStack
        py={4}
        px={4}
        minW="40"
        space="2"
        rounded="xl"
        {...rest}
        shadow="4">
        <S.HStack w="100%" alignItems="center" justifyContent="flex-start">
          {Icons[textCard]()}
        </S.HStack>

        <S.Text
          fontWeight="bold"
          fontSize="3xl"
          color="#fff"
          textAlign="left"
          testID="data-value">
          {data ? data : 0}
        </S.Text>

        <S.Text
          fontWeight="bold"
          fontSize="xs"
          color="#ffffffc1"
          textAlign="left"
          shadow="4"
          testID="text-card">
          {textCard}
        </S.Text>
      </S.VStack>
    </Skeleton>
  );
}
