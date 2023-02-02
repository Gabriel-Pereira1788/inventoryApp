import React from 'react';

//*styles
import * as S from 'native-base';
//*hooks
import {useBottomTabs} from '../../hooks/useBottomTabs';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BottomTabsProps} from './view.models';

MaterialIcon.loadFont();

export default function BottomTabs({currentPath}: BottomTabsProps) {
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
      <AntDesign
        testID="iconExclamation"
        name="exclamation"
        size={25}
        color={setCurrentColor('about')}
      />
    </S.HStack>
  );
}
