import React from 'react';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComunnityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//*styles
import * as S from 'native-base';
//*hooks
import {useModal} from '../../../../../hooks/useModal';
//*components
import {Filters} from '../Filters';

interface ControllersProps {}

export function Controllers({}: ControllersProps) {
  const {isOpen, handleToggleState} = useModal();

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
        backgroundColor="#fff"
        placeholder="Pesquisar..."
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
        <MaterialComunnityIcons name="tune-vertical-variant" size={25} />
      </S.Pressable>

      <Filters isOpen={isOpen} onClose={handleToggleState} />
    </S.HStack>
  );
}
