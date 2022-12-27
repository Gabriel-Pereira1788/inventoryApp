import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import {VStack, Image, Text, Box} from 'native-base';
import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import {Loading} from '../../../components/Loading';
import {formatUser} from '../../../utils/formatUser';

export function InitialScreen() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  useEffect(() => {
    auth().onAuthStateChanged(userCredentials => {
      if (userCredentials) {
        queryClient.setQueryData(['user'], formatUser(userCredentials));
        setTimeout(() => {
          navigation.navigate('dashboard');
        }, 2000);
      } else {
        queryClient.removeQueries(['user']);
        setTimeout(() => {
          navigation.navigate('login');
        }, 2000);
      }
    });
  }, [navigation, queryClient]);
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
