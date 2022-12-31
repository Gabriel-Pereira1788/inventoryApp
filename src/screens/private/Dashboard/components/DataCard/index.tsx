import React from 'react';
//*styles
import * as S from 'native-base';
//*icons
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcons from 'react-native-vector-icons/FontAwesome5';
Icon.loadFont();

interface Props extends S.IStackProps {
  textCard: string;
}

export function DataCard({textCard, ...rest}: Props) {
  return (
    <S.VStack
      py={4}
      px={4}
      minW="40"
      space="2"
      rounded="xl"
      {...rest}
      shadow="4">
      <S.HStack w="100%" alignItems="center" justifyContent="flex-start">
        {textCard === 'Produtos que entraram' ? (
          <Icon
            name="pie-chart-sharp"
            size={27}
            color="#fff"
            testID="iconChart"
          />
        ) : (
          <FontIcons
            name="chart-pie"
            size={25}
            color="#fff"
            testID="iconChart"
          />
        )}
      </S.HStack>

      <S.Text fontWeight="bold" fontSize="3xl" color="#fff" textAlign="left">
        3027
      </S.Text>

      <S.Text
        fontWeight="bold"
        fontSize="xs"
        color="#ffffffc1"
        textAlign="left"
        shadow="4">
        {textCard}
      </S.Text>
    </S.VStack>
  );
}
