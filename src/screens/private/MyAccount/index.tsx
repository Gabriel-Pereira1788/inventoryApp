import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {ModalEdit} from './components/ModalEdit';
import {SharedLayout} from '../../../components/SharedLayout';
import DataView from './components/DataView';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//*hooks
import {useModal} from '../../../hooks/useModal';
import {ToggleTheme} from '../../../components/ToggleTheme';
MaterialIcons.loadFont();

type Props = {};

export default function MyAccount({}: Props) {
  const {isOpen, handleToggleState} = useModal();

  return (
    <>
      <SharedLayout>
        <S.Box w="100%" alignItems="center" justifyContent="center" my="5%">
          <ToggleTheme />
        </S.Box>
        <DataView onPress={handleToggleState} key={String(isOpen)} />
      </SharedLayout>
      <ModalEdit isOpen={isOpen} onClose={handleToggleState} />
    </>
  );
}
