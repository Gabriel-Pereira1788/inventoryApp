import React from 'react';
import {useNavigation} from '@react-navigation/native';
//*styles
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useColorMode} from 'native-base';
import {useBottomTabs} from './hooks/useBottomTabs';
MaterialIcon.loadFont();

export type Paths = 'dashboard' | 'products' | 'notifications';
type Props = {
  currentPath?: Paths;
};

export default function BottomTabs({currentPath}: Props) {
  const {redirectScreen, setCurrentColor} = useBottomTabs(currentPath);
  return (
    <S.HStack
      width="100%"
      px={3}
      py={2}
      alignItems="center"
      justifyContent="space-evenly"
      space={1}
      _light={{backgroundColor: 'backgroundLight'}}
      _dark={{backgroundColor: 'backgroundDark'}}>
      <MaterialIcon
        name="pie-chart"
        size={25}
        color={setCurrentColor('dashboard')}
        onPress={redirectScreen('dashboard')}
      />
      <MaterialIcon
        name="inventory"
        size={25}
        color={setCurrentColor('products')}
        onPress={redirectScreen('products')}
      />
      <MaterialIcon
        name="notifications"
        size={25}
        color={setCurrentColor('notifications')}
        onPress={redirectScreen('notifications')}
      />
    </S.HStack>
  );
}
