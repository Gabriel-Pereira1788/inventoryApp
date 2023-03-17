import {useNavigation} from '@react-navigation/native';
import {useColorMode} from 'native-base';
import {ColorValue} from 'react-native';
import {useNotifications} from '../screens/private/Notifications/useViewModel';

export type Paths =
  | 'dashboard'
  | 'products'
  | 'notifications'
  | 'about'
  | 'chatBot';

export function useBottomTabs(currentPath?: Paths) {
  const navigation = useNavigation();
  const {colorMode} = useColorMode();
  const {data} = useNotifications();

  const unreadNotifications =
    data && data.length > 0
      ? data.some(notification => notification.read === false)
      : false;

  const redirectScreen = (path: Paths) => {
    return () => {
      navigation.navigate(path);
    };
  };

  const setCurrentColor = (path: Paths): ColorValue => {
    if (currentPath === path) {
      return '#2989b0';
    }

    return colorMode === 'light' ? '#7c7c7c' : '#fff';
  };

  return {colorMode, unreadNotifications, redirectScreen, setCurrentColor};
}
