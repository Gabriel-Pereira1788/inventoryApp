import {useNavigation} from '@react-navigation/native';
import {HStack} from 'native-base';
import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
MaterialIcon.loadFont();

type Props = {};

export default function BottomTabs({}: Props) {
  const navigation = useNavigation();
  const redirectScreen = (path: 'dashboard' | 'products') => {
    return () => {
      navigation.navigate(path);
    };
  };
  return (
    <HStack
      width="100%"
      p={3}
      alignItems="center"
      justifyContent="space-evenly"
      space={5}>
      <MaterialIcon
        name="pie-chart"
        size={28}
        color="#000"
        onPress={redirectScreen('dashboard')}
      />
      <MaterialIcon
        name="inventory"
        size={28}
        color="#000"
        onPress={redirectScreen('products')}
      />
    </HStack>
  );
}
