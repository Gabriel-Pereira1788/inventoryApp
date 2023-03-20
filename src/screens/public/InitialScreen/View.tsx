import * as S from 'native-base';

import React, {useEffect} from 'react';
import OneSignal from 'react-native-onesignal';
import {Loading} from '../../../components/Loading/View';
import {useInitial} from './useViewModel';
import {ONE_SIGNAL_ID} from '@env';
import {ArrowRight} from 'phosphor-react-native';
import {INITIAL_TEXT} from '../../../constants/defaultTexts';
import {RenderIF} from '../../../components/RenderIF/View';
import {NavigationProps} from '../../../routes/navigation';
import {sizes} from '../../../constants/sizesDevice';

export function InitialScreen({navigation}: NavigationProps<'initialScreen'>) {
  const {user, redirectScreen} = useInitial({navigation});

  useEffect(() => {
    OneSignal.setAppId(ONE_SIGNAL_ID);

    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);
  return (
    <S.VStack
      bg="#F7F9FB"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={3}>
      <S.VStack w="100%" alignItems="center" justifyContent="center" space={10}>
        <S.Image
          shadow={4}
          source={require('../../../assets/images/icon_inventory.png')}
          alt="inventory image"
          width={(sizes.width / 100) * 30}
          height={(sizes.width / 100) * 30}
          rounded="lg"
          testID="image"
        />
        <S.Text
          px={5}
          fontWeight={400}
          fontSize="lg"
          w="100%"
          textAlign="justify">
          {INITIAL_TEXT}
        </S.Text>
      </S.VStack>
      {/* <S.Box mt="20%">
        <Loading />
      </S.Box> */}
      <S.HStack
        position="absolute"
        bottom={5}
        w="100%"
        alignItems="center"
        justifyContent="flex-end">
        <RenderIF condition={!user}>
          <S.Pressable onPress={redirectScreen}>
            <S.Circle
              size={30}
              shadow={3}
              p={7}
              backgroundColor="#54595D"
              alignItems="center"
              justifyContent="center">
              <ArrowRight size={25} color="#f4f7f3" weight="thin" />
            </S.Circle>
          </S.Pressable>
        </RenderIF>
      </S.HStack>
    </S.VStack>
  );
}
