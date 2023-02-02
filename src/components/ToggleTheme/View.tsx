import * as S from 'native-base';
import {Sun, Moon} from 'phosphor-react-native';
import React from 'react';
import {ToggleThemeProps} from './view.models';

export function ToggleTheme(props: ToggleThemeProps) {
  const {toggleColorMode, colorMode} = S.useColorMode();
  return (
    <S.HStack alignItems="center" space={3} testID="containerIcon">
      <Sun
        size={20}
        weight="fill"
        color={colorMode === 'light' ? '#000' : '#fff'}
      />
      <S.Switch
        size="md"
        onToggle={toggleColorMode}
        isChecked={colorMode === 'dark'}
      />
      <Moon
        size={20}
        weight="fill"
        color={colorMode === 'light' ? '#000' : '#fff'}
      />
    </S.HStack>
  );
}
