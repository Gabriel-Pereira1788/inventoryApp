import {Box, IPressableProps, Pressable, useColorMode} from 'native-base';
import {Sun} from 'phosphor-react-native';
import React from 'react';

interface Props extends IPressableProps {}
export function ToggleTheme(props: Props) {
  const {toggleColorMode, colorMode} = useColorMode();
  return (
    <Pressable onPress={toggleColorMode} {...props} testID="toggleColorButton">
      <Box
        p={3}
        _light={{backgroundColor: '#fff'}}
        _dark={{backgroundColor: 'dark.300'}}
        rounded="md"
        shadow={1}
        testID="containerIcon">
        <Sun
          size={20}
          weight="fill"
          color={colorMode === 'light' ? '#000' : '#fff'}
        />
      </Box>
    </Pressable>
  );
}
