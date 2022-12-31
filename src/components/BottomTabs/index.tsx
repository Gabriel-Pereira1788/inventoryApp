import React from 'react';
import {useNavigation} from '@react-navigation/native';
//*styles
import * as S from 'native-base';
//*icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useColorMode} from 'native-base';
MaterialIcon.loadFont();

type Props = {};

export default function BottomTabs({}: Props) {
  const navigation = useNavigation();
  const {colorMode} = useColorMode();
  const redirectScreen = (path: 'dashboard' | 'products') => {
    return () => {
      navigation.navigate(path);
    };
  };
  return (
    <S.HStack
      width="100%"
      px={3}
      py={2}
      alignItems="center"
      justifyContent="space-evenly"
      space={5}
      _light={{backgroundColor: 'backgroundLight'}}
      _dark={{backgroundColor: 'backgroundDark'}}>
      <MaterialIcon
        name="pie-chart"
        size={25}
        color={colorMode === 'light' ? '#000' : '#fff'}
        onPress={redirectScreen('dashboard')}
      />
      <MaterialIcon
        name="inventory"
        size={25}
        color={colorMode === 'light' ? '#000' : '#fff'}
        onPress={redirectScreen('products')}
      />
    </S.HStack>
  );
}
