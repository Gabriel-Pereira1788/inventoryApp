import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/services/config/queryClient';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Router';
import {colorModeManager, MAIN} from './src/styles/themes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import OneSignal from 'react-native-onesignal';
import {ONE_SIGNAL_ID} from '@env';

OneSignal.setAppId(ONE_SIGNAL_ID);

OneSignal.setNotificationOpenedHandler(notificationData => {});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider colorModeManager={colorModeManager} theme={MAIN}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <Router />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
