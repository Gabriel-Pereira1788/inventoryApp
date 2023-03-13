import * as S from 'native-base';

import React, {useEffect} from 'react';
import OneSignal from 'react-native-onesignal';
import {Loading} from '../../../components/Loading/View';
import {useInitial} from './useViewModel';
import {ONE_SIGNAL_ID} from '@env';

export function InitialScreen() {
  useInitial();

  useEffect(() => {
    OneSignal.setAppId(ONE_SIGNAL_ID);

    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);
  return (
    <S.VStack
      bg="dark.400"
      flex={1}
      alignItems="center"
      justifyContent="flex-start"
      p={3}>
      <S.VStack w="100%" mt="20%" alignItems="center">
        <S.Text fontWeight="bold" color="#fff" fontSize="3xl" mb="10%">
          INVENTORY
        </S.Text>
        <S.Image
          source={require('../../../assets/images/inventory.png')}
          alt="inventory image"
          height={200}
          testID="image"
        />
      </S.VStack>
      <S.Box mt="20%">
        <Loading />
      </S.Box>
    </S.VStack>
  );
}
