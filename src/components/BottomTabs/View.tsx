import React from 'react';

//*styles
import * as S from 'native-base';
//*hooks
import {useBottomTabs} from '../../hooks/useBottomTabs';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialIcon.loadFont();

import {Paths} from '../../hooks/useBottomTabs';

export interface BottomTabsProps {
  currentPath?: Paths;
}

export default function BottomTabs({currentPath}: BottomTabsProps) {
  const {redirectScreen, setCurrentColor} = useBottomTabs(currentPath);
  return (
    <S.HStack
      width="100%"
      px={3}
      py={5}
      borderTopRadius={35}
      alignItems="center"
      justifyContent="space-around"
      space={1}
      shadow={5}
      _light={{backgroundColor: 'backgroundDark'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      testID="containerNavigation">
      <MaterialIcon
        testID="iconDashboard"
        name="pie-chart"
        size={25}
        color={setCurrentColor('dashboard')}
        onPress={redirectScreen('dashboard')}
      />
      <MaterialIcon
        testID="iconProducts"
        name="inventory"
        size={25}
        color={setCurrentColor('products')}
        onPress={redirectScreen('products')}
      />
      <MaterialIcon
        testID="iconNotifications"
        name="notifications"
        size={25}
        color={setCurrentColor('notifications')}
        onPress={redirectScreen('notifications')}
      />

      <MaterialCommunityIcon
        testID="iconNotifications"
        name="robot"
        size={25}
        color={setCurrentColor('notifications')}
        onPress={redirectScreen('notifications')}
      />
    </S.HStack>
  );
}
