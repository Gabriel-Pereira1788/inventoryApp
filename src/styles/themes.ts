import AsyncStorage from '@react-native-async-storage/async-storage';
import {ColorMode, extendTheme} from 'native-base';
import {StorageManager} from 'native-base/lib/typescript/core';

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    try {
      if (value) {
        await AsyncStorage.setItem('@color-mode', value);
      }
    } catch (e) {
      console.log(e);
    }
  },
};

export const MAIN = extendTheme({
  colors: {
    primary: {
      200: '#FFF3AA',
      300: '#F0DC61',
      400: '#FFE600',
      500: '#FFE238',
    },
    dark: {
      200: '#716F6F',
      300: '#545353',
      400: '#626262',
    },
    text: {
      100: '#A4A4A4',
    },
    white: '#FFFFFF',
    backgroundLight: '#F9F6F6',
    backgroundDark: '#343333',
  },
});
