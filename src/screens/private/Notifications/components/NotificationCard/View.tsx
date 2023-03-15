import React from 'react';
import * as S from 'native-base';
import {Notifications} from '../../../../../models/Notifications';
import {formatDate} from '../../../../../utils/formatDate';
import Animated, {useSharedValue, withRepeat} from 'react-native-reanimated';
interface NotificationCardProps extends Notifications {}

export default function NotificationCard({
  item_alert,
  createdAt,
  type_notification,
  read,
}: NotificationCardProps) {
  const animatedValue = useSharedValue(0);

  return (
    <S.HStack
      position="relative"
      w="100%"
      p={5}
      borderBottomWidth={1}
      borderRadius={5}
      backgroundColor={read ? '#dddddd4d' : 'transparent'}
      borderBottomColor={'#dddddd4d'}>
      <Animated.View>
        <S.Circle
          size={3}
          shadow={3}
          backgroundColor="red.400"
          position="absolute"
          right={5}
          top={5}
        />
      </Animated.View>
      <S.VStack>
        <S.Text
          fontWeight={600}
          fontSize="lg"
          color={read ? '#dddddd4d' : 'primary.300'}>
          {item_alert}
        </S.Text>
        <S.Text
          fontWeight={600}
          fontSize="sm"
          color={read ? '#dddddd4d' : '#b5b2b2'}>
          Por favor reponha o estoque do produto, recomendamos que ...
        </S.Text>
        <S.HStack w="100%" alignItems="center" justifyContent="flex-end">
          <S.Text fontWeight={600} fontSize="sm" color="#b5b2b2">
            {formatDate(new Date(createdAt))}
          </S.Text>
        </S.HStack>
      </S.VStack>
    </S.HStack>
  );
}
