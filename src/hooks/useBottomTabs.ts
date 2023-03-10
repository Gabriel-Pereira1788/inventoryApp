import {useNavigation} from '@react-navigation/native';
import {useColorMode} from 'native-base';
import {ColorValue} from 'react-native';

export type Paths =
  | 'dashboard'
  | 'products'
  | 'notifications'
  | 'about'
  | 'chatBot';

export function useBottomTabs(currentPath?: Paths) {
  const navigation = useNavigation();
  const {colorMode} = useColorMode();
  const redirectScreen = (path: Paths) => {
    return () => {
      navigation.navigate(path);
    };
  };

  const setCurrentColor = (path: Paths): ColorValue => {
    if (currentPath === path) {
      return '#F0DC61';
    }

    return colorMode === 'light' ? '#7c7c7c' : '#fff';
  };

  return {colorMode, redirectScreen, setCurrentColor};
}
