import {useNavigation} from '@react-navigation/native';
import {VStack, Image, Text, Box} from 'native-base';

import React, {useEffect} from 'react';
import {Loading} from '../../../components/Loading';

export function InitialScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('register');
    }, 3000);
  }, [navigation]);
  return (
    <VStack
      bg="dark.400"
      flex={1}
      alignItems="center"
      justifyContent="flex-start"
      p={3}>
      <VStack w="100%" mt="20%" alignItems="center">
        <Text fontWeight="bold" color="#fff" fontSize="3xl" mb="10%">
          INVENTORY
        </Text>
        <Image
          source={require('../../../Assets/images/inventory.png')}
          alt="inventory image"
          height={200}
          testID="image"
        />
      </VStack>
      <Box mt="20%">
        <Loading />
      </Box>
    </VStack>
  );
}
