import {ONE_SIGNAL_ID} from '@env';
import React from 'react';
import OneSignal, {OpenedEvent} from 'react-native-onesignal';

export function useListenNotifications() {
  const [notification, setNotification] = React.useState<OpenedEvent | null>(
    null,
  );
  React.useEffect(() => {
    OneSignal.setAppId(ONE_SIGNAL_ID);

    OneSignal.setNotificationOpenedHandler(notificationData => {
      setNotification(notificationData);
    });
  }, []);
  return {notification};
}
