import React from 'react';
import * as S from 'native-base';
import {TouchableOpacity} from 'react-native';
//*components
import {Input} from '../../../../../components/Input/View';
import {Button} from '../../../../../components/Button/View';
//*store
import Modal from '../../../../../components/Modal/View';
//*hooks
import {useEditUser} from './useViewModel';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RenderIF} from '../../../../../components/RenderIF/View';
import {UserCircle} from 'phosphor-react-native';

MaterialIcons.loadFont();

export interface ModalEditProps extends S.IModalProps {}
export function ModalEdit(props: ModalEditProps) {
  const {dataUser, handleChangeData, onSubmit, handleSetImage} = useEditUser();

  const handleSubmit = async () => {
    await onSubmit();
    props.onClose();
  };
  return (
    <Modal {...props}>
      <S.ScrollView
        w="100%"
        showsVerticalScrollIndicator={false}
        h={{
          base: '700px',
          lg: 'auto',
        }}>
        <S.VStack flex={1} p={4} space={3}>
          <S.Box
            my={10}
            alignItems="center"
            justifyContent="center"
            position="relative">
            <TouchableOpacity onPress={handleSetImage}>
              <RenderIF
                condition={!!dataUser && !!dataUser.photoURL}
                RenderComponent={() => <UserCircle size={25} color="#ddd" />}>
                <S.Image
                  width={100}
                  height={100}
                  rounded="full"
                  alt="imageuser"
                  source={{
                    uri:
                      (dataUser && dataUser.photoURL && dataUser.photoURL!) ||
                      '',
                  }}
                />
              </RenderIF>
              <S.Box position="absolute" bottom={0}>
                <MaterialIcons name="pencil" color="#F0DC61" size={30} />
              </S.Box>
            </TouchableOpacity>
          </S.Box>

          <Input
            title="Nome"
            w={'100%'}
            value={dataUser && dataUser.name}
            onChangeText={handleChangeData('name')}
          />
          <Input
            title="email"
            w="100%"
            value={dataUser && dataUser.email}
            onChangeText={handleChangeData('email')}
          />
          <Button onPress={handleSubmit}> Confirmar </Button>
        </S.VStack>
      </S.ScrollView>
    </Modal>
  );
}
