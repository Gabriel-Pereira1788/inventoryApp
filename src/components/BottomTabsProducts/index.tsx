import React from 'react';

//*styles
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Paths, useBottomTabs} from '../../hooks/useBottomTabs';

MaterialIcon.loadFont();

type Props = {
  currentPath?: Paths;
};

export default function BottomTabsProducts({currentPath}: Props) {
  const {redirectScreen, setCurrentColor} = useBottomTabs(currentPath);
  return (
    <S.HStack
      width="100%"
      px={3}
      py={2}
      alignItems="center"
      justifyContent="space-around"
      space={1}
      _light={{backgroundColor: 'backgroundLight'}}
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
      <MaterialIcon
        testID="iconNotifications"
        name="notifications"
        size={25}
        color={setCurrentColor('notifications')}
        onPress={redirectScreen('notifications')}
      />
    </S.HStack>
  );
}
