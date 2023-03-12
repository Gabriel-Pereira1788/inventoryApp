import React from 'react';
import * as S from 'native-base';
<<<<<<< HEAD
=======
import {TouchableOpacity} from 'react-native';
>>>>>>> development
//*components
import {Input} from '../../../../../components/Input/View';
import {Button} from '../../../../../components/Button/View';
//*store
import Modal from '../../../../../components/Modal/View';
//*hooks
import {useEditUser} from './useViewModel';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
<<<<<<< HEAD
=======

>>>>>>> development
MaterialIcons.loadFont();

export interface ModalEditProps extends S.IModalProps {}
export function ModalEdit(props: ModalEditProps) {
<<<<<<< HEAD
  const {dataUser, handleChangeData, onSubmit} = useEditUser();
=======
  const {dataUser, handleChangeData, onSubmit, setImage} = useEditUser();
>>>>>>> development

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
<<<<<<< HEAD
        <S.VStack flex={1} p={2} space={3}>
          <S.Box my={10} alignItems="center">
            <S.Image
              width={100}
              height={100}
              rounded="full"
              alt="imageuser"
              source={{
                uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
              position="relative"
            />
            <S.Box position="absolute" bottom={0} right={'30%'}>
              <MaterialIcons name="pencil" color="#F0DC61" size={30} />
            </S.Box>
=======
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
>>>>>>> development
          </S.Box>

          <Input
            title="Nome"
<<<<<<< HEAD
            w={'64'}
            value={dataUser.name}
=======
            w={'100%'}
            value={dataUser && dataUser.name}
>>>>>>> development
            onChangeText={handleChangeData('name')}
          />
          <Input
            title="email"
            w="100%"
<<<<<<< HEAD
            value={dataUser.email}
=======
            value={dataUser && dataUser.email}
>>>>>>> development
            onChangeText={handleChangeData('email')}
          />
          <Button onPress={handleSubmit}> Confirmar </Button>
        </S.VStack>
      </S.ScrollView>
    </Modal>
  );
}
