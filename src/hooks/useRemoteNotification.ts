import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export function useRemoteNotification() {
  function notificationController() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('Token', token);
      },
      onNotification: function (notification) {
        console.log('Remote controller', notification);
      },

      requestPermissions: true,
      popInitialNotification: true,
    });
  }

  async function notificationPermission() {
    const response = await messaging().requestPermission();
    console.log(response);
  }

  useEffect(() => {
    notificationController();
  }, []);
}
