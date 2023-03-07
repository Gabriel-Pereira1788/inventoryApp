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

MaterialIcons.loadFont();

export interface ModalEditProps extends S.IModalProps {}
export function ModalEdit(props: ModalEditProps) {
  const {dataUser, handleChangeData, onSubmit, setImage} = useEditUser();

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
            <TouchableOpacity onPress={setImage}>
              <S.Image
                width={100}
                height={100}
                rounded="full"
                alt="imageuser"
                source={{
                  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                }}
              />
              <S.Box position="absolute" bottom={0}>
                <MaterialIcons name="pencil" color="#F0DC61" size={30} />
              </S.Box>
            </TouchableOpacity>
          </S.Box>

          <Input
            title="Nome"
            w={'100%'}
            value={dataUser.name}
            onChangeText={handleChangeData('name')}
          />
          <Input
            title="email"
            w="100%"
            value={dataUser.email}
            onChangeText={handleChangeData('email')}
          />
          <Button onPress={handleSubmit}> Confirmar </Button>
        </S.VStack>
      </S.ScrollView>
    </Modal>
  );
}
