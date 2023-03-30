import React from 'react';
import * as S from 'native-base';
import {SharedLayout} from '../../../components/SharedLayout';
import {useNotifications} from './useViewModel';
import NotificationCard from './components/NotificationCard/View';

type Props = {};

export default function Notifications({}: Props) {
  const {data} = useNotifications();

  return (
    <SharedLayout currentPath="notifications">
      <S.ScrollView
        testID="notifications-scrollview"
        flex={1}
        mt="20%"
        w="full"
        paddingX={5}>
        {data &&
          data.length > 0 &&
          data.map(notification => (
            <NotificationCard
              key={notification.id_notification}
              {...notification}
            />
          ))}
      </S.ScrollView>
    </SharedLayout>
  );
}
