import React from 'react';
//*styles
import * as S from 'native-base';
//*components
import {ModalEdit} from './components/ModalEdit/View';
import {SharedLayout} from '../../../components/SharedLayout';
import DataView from './components/DataView/View';
//*icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//*hooks
import {useModal} from '../../../hooks/useModal';

import {useAuth} from '../../../hooks/useAuth';
MaterialIcons.loadFont();
Ionicons.loadFont();

type Props = {};

export default function MyAccount({}: Props) {
  const {isOpen, handleToggleState} = useModal();
  const {signOut} = useAuth();

  return (
    <>
      <SharedLayout>
        <DataView onPress={handleToggleState} key={String(isOpen)} />

        <S.Box mt={10} width="100%" alignItems="center" justifyContent="center">
          <Ionicons name="exit" color="#000" size={30} onPress={signOut} />
        </S.Box>
      </SharedLayout>
      <ModalEdit isOpen={isOpen} onClose={handleToggleState} />
    </>
  );
}
