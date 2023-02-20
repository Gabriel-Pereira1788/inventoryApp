import messaging from '@react-native-firebase/messaging';

async function listenRemoteNotification() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('message', remoteMessage);
  });
}

export const Messaging = {
  listenRemoteNotification,
};
