import React from 'react';

//*styles
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useBottomTabs} from '../../hooks/useBottomTabs';
import {AddProduct} from '../AddProduct/View';
import {BottomTabsProductsProps} from './view.models';

MaterialIcon.loadFont();

export default function BottomTabsProducts({
  currentPath,
}: BottomTabsProductsProps) {
  const {redirectScreen, setCurrentColor} = useBottomTabs(currentPath);
  return (
    <>
      <S.HStack
        width="100%"
        px={6}
        py={4}
        shadow={5}
        alignItems="center"
        justifyContent="space-between"
        space={1}
        _light={{backgroundColor: '#FFF'}}
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
          style={{marginRight: 10}}
          size={25}
          color={setCurrentColor('products')}
          onPress={redirectScreen('products')}
        />

        <MaterialIcon
          testID="iconNotifications"
          name="notifications"
          style={{marginLeft: 10}}
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
