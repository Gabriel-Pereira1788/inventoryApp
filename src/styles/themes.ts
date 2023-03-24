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
      300: '#123D42',
      400: '#FFE600',
      500: '#FFE238',
    },
    dark: {
      200: '#716F6F',
      300: '#545353',
      400: '#626262',
    },
    text: {
      100: '#102f3b',
    },
    white: '#FFFFFF',
    background: '#123D42',
    backgroundLight: '#F9F6F6',
    backgroundDark: '#343333',
  },
  fontConfig: {
    Jost: {
      100: {
        normal: 'Jost-Light',
        italic: 'Jost-LightItalic',
      },
      200: {
        normal: 'Jost-Light',
        italic: 'Jost-LightItalic',
      },
      300: {
        normal: 'Jost-Light',
        italic: 'Jost-LightItalic',
      },
      400: {
        normal: 'Jost-Regular',
        italic: 'Jost-Italic',
      },
      500: {
        normal: 'Jost-Medium',
      },
      600: {
        normal: 'Jost-Medium',
        italic: 'Jost-MediumItalic',
      },
      700: {
        normal: 'Jost-Bold',
      },
      800: {
        normal: 'Jost-Bold',
        italic: 'Jost-BoldItalic',
      },
    },
    Rubik: {
      100: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
      },
      200: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
      },
      300: {
        normal: 'Rubik-Light',
        italic: 'Rubik-LightItalic',
      },
      400: {
        normal: 'Rubik-Regular',
        italic: 'Rubik-Italic',
      },
      500: {
        normal: 'Rubik-Medium',
      },
      600: {
        normal: 'Rubik-Medium',
        italic: 'Rubik-MediumItalic',
      },
      700: {
        normal: 'Rubik-Bold',
      },
      800: {
        normal: 'Rubik-Bold',
        italic: 'Rubik-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Jost',
    body: 'Jost',
    mono: 'Jost',
  },
});
