import React from 'react';
import {HStack, Text} from 'native-base';
//*components
import {Card} from '../../../../../components/Card';
//*icons
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export function DataCard() {
  return (
    <Card p={3} h="40" space="5">
      <HStack w="100%" alignItems="center" justifyContent="flex-start">
        <Icon
          name="pie-chart-sharp"
          size={20}
          color="#000"
          testID="iconChart"
        />
      </HStack>

      <Text
        fontWeight="bold"
        fontSize="3xl"
        color="primary.300"
        textAlign="center">
        3027
      </Text>

      <Text fontWeight="bold" fontSize="sm" color="text.100">
        Produtos que entraram
      </Text>
    </Card>
  );
}
