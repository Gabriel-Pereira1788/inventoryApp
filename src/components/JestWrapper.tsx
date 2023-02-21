import {QueryClientProvider} from '@tanstack/react-query';
import {NativeBaseProvider} from 'native-base';
import React, {ReactNode} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import queryClient from '../services/config/queryClient';
import {colorModeManager, MAIN} from '../styles/themes';
export const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

type Props = {
  children: ReactNode;
};
export const Wrapper = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider
        initialWindowMetrics={inset}
        colorModeManager={colorModeManager}
        theme={MAIN}>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            {children}
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};
