import React from 'react';
import * as S from 'native-base';
import {NotificationsDTO} from '../../../../../models/Notifications';
import {formatDate} from '../../../../../utils/formatDate';
import {
  NotificationsText,
  NOTIFICATIONS_TEXT,
} from '../../../../../constants/notificationsText';
import ModalNotification from '../ModalNotification/View';
import {useModal} from '../../../../../hooks/useModal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RenderIF} from '../../../../../components/RenderIF/View';
interface NotificationCardProps extends NotificationsDTO {}

export default function NotificationCard({
  item_alert,
  createdAt,
  type_notification,
  read,
  ...rest
}: NotificationCardProps) {
  const {isOpen, handleToggleState} = useModal();

  const text = NOTIFICATIONS_TEXT[type_notification as keyof NotificationsText]
    ? NOTIFICATIONS_TEXT[type_notification as keyof NotificationsText]
    : '';

  const date = formatDate(new Date(createdAt));

  console.log(text.slice(0, 57));

  console.log(item_alert);

  return (
    <>
      <TouchableOpacity testID="card-notification" onPress={handleToggleState}>
        <S.HStack
          position="relative"
          w="100%"
          p={5}
          borderBottomWidth={1}
          borderRadius={5}
          backgroundColor={read ? '#dddddd4d' : 'transparent'}
          borderBottomColor={'#dddddd4d'}>
          <RenderIF condition={!read}>
            <S.Circle
              size={3}
              shadow={3}
              backgroundColor="red.500"
              position="absolute"
              right={5}
              top={5}
            />
          </RenderIF>
          <S.VStack>
            <S.Text
              fontWeight={600}
              fontSize="lg"
              color={read ? '#999999a7' : 'primary.300'}>
              {item_alert}
            </S.Text>
            <S.Text
              fontWeight={600}
              fontSize="sm"
              color={read ? '#9b9b9ba9' : '#b5b2b2'}>
              {text.slice(0, 57)}...
            </S.Text>
            <S.HStack w="100%" alignItems="center" justifyContent="flex-end">
              <S.Text
                testID="date"
                fontWeight={600}
                fontSize="sm"
                color="#b5b2b2">
                {date}
              </S.Text>
            </S.HStack>
          </S.VStack>
        </S.HStack>
      </TouchableOpacity>
      <ModalNotification
        isOpen={isOpen}
        onClose={handleToggleState}
        title={item_alert}
        textContent={text}
        date={date}
        read={read}
        {...rest}
      />
    </>
  );
}
