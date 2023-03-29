import messaging from '@react-native-firebase/messaging';

async function listenRemoteNotification() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {});
}

export const Messaging = {
  listenRemoteNotification,
};
