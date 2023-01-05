import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/services/config/queryClient';
import {NotificationController} from './src/services/controllers/NotificationController';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Router';
import {colorModeManager, MAIN} from './src/styles/themes';

export default function App() {
  return (
    <NotificationController>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider colorModeManager={colorModeManager} theme={MAIN}>
          <SafeAreaProvider>
            <Router />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </NotificationController>
  );
}
