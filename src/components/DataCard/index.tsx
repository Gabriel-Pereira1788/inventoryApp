import React from 'react';
import {HStack, Text, VStack} from 'native-base';
//*icons
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export function DataCard() {
  return (
    <VStack
      p={3}
      _light={{backgroundColor: 'white'}}
      _dark={{backgroundColor: 'dark.300'}}
      h="40"
      rounded="md"
      space="5"
      shadow={3}>
      <HStack w="100%" alignItems="center" justifyContent="flex-start">
        <Icon name="pie-chart-sharp" size={20} color="#000" />
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
    </VStack>
  );
}
