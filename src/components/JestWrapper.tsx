import {NativeBaseProvider} from 'native-base';
import React, {ReactNode} from 'react';
import {colorModeManager, MAIN} from '../styles/themes';
export const inset = {
  frame: {x: 0, y: 0, width: 0, height: 0},
  insets: {top: 0, left: 0, right: 0, bottom: 0},
};

export const Wrapper = ({children}: {children: ReactNode}) => {
  return (
    <NativeBaseProvider
      initialWindowMetrics={inset}
      colorModeManager={colorModeManager}
      theme={MAIN}>
      {children}
    </NativeBaseProvider>
  );
};
