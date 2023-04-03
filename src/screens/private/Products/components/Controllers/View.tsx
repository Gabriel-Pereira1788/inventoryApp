import React from 'react';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//*styles
import * as S from 'native-base';
//*hooks
import {useModal} from '../../../../../hooks/useModal';
//*components
import {Filters} from '../Filters/View';
import {useControllers} from './useViewModel';
import {useColorMode} from 'native-base';
import {RenderIF} from '../../../../../components/RenderIF/View';

interface ControllersProps {}

export function Controllers({}: ControllersProps) {
  const {isOpen, handleToggleState} = useModal();
  const {colorMode} = useColorMode();

  const {searchText, handleSearch} = useControllers();

  return (
    <S.HStack
      w="100%"
      p={3}
      alignItems="center"
      justifyContent="center"
      space={2}>
      <S.Input
        w="90%"
        p={2}
        borderRadius={'lg'}
        borderWidth={1}
        borderColor="#dddddd2c"
        shadow={1}
        _light={{backgroundColor: '#fff'}}
        _dark={{backgroundColor: 'backgroundDark'}}
        placeholder="Pesquisar..."
        textDecorationColor="#fff"
        tintColor="#fff"
        value={searchText}
        onChangeText={handleSearch}
        rightElement={
          <MaterialIcons
            name="search"
            size={25}
            style={{marginRight: 10}}
            color="#ddd"
          />
        }
      />
      <S.Pressable onPress={handleToggleState}>
        <MaterialComunnityIcons
          testID="filtersIcon"
          name="tune-vertical-variant"
          size={25}
          color={colorMode === 'dark' ? '#F0DC61' : '#ddd'}
        />
      </S.Pressable>

      <RenderIF condition={isOpen}>
        <Filters
          isOpen={isOpen}
          onClose={handleToggleState}
          testID="filtersModal"
        />
      </RenderIF>
    </S.HStack>
  );
}
