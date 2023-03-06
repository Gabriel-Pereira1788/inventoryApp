import React from 'react';
//*styles
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
//*hooks
import {Paths, useBottomTabs} from '../../../../../hooks/useBottomTabs';
import {AddProduct} from '../AddProduct/View';

MaterialIcon.loadFont();
export interface BottomTabsProductsProps {
  currentPath?: Paths;
}

export default function BottomTabsProducts({
  currentPath,
}: BottomTabsProductsProps) {
  const {redirectScreen, setCurrentColor} = useBottomTabs(currentPath);
  return (
    <>
      <S.HStack
        width="100%"
        px={5}
        py={5}
        borderTopRadius={35}
        _light={{backgroundColor: 'backgroundDark'}}
        _dark={{backgroundColor: 'backgroundDark'}}
        shadow={5}
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
        space={2}
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
          style={{marginRight: 15}}
          size={25}
          color={setCurrentColor('products')}
          onPress={redirectScreen('products')}
        />

        <MaterialIcon
          testID="iconNotifications"
          name="notifications"
          style={{marginLeft: 15}}
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
      <AddProduct />
    </>
  );
}
