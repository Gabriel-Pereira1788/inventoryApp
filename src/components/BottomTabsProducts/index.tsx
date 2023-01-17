import React from 'react';

//*styles
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Paths, useBottomTabs} from '../../hooks/useBottomTabs';
import AddProduct from '../AddProduct';

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
      py={5}
      shadow={5}
      alignItems="center"
      justifyContent="center"
      space={16}
      _light={{backgroundColor: '#FFF'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      testID="containerNavigation"
      position="relative">
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
      <AddProduct />
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
