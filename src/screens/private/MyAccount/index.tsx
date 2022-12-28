import React from 'react';
//*components
import {ModalEdit} from './components/ModalEdit';
import {SharedLayout} from '../../../components/SharedLayout';
import DataView from './components/DataView';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//*hooks
import {useModal} from '../../../hooks/useModal';
MaterialIcons.loadFont();

type Props = {};

export default function MyAccount({}: Props) {
  const {isOpen, handleToggleState} = useModal();
  return (
    <>
      <SharedLayout>
        <DataView onPress={handleToggleState} key={String(isOpen)} />
      </SharedLayout>
      <ModalEdit isOpen={isOpen} onClose={handleToggleState} />
    </>
  );
}
