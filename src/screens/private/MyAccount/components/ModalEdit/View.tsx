import React from 'react';
import {Box, Image, ScrollView, VStack} from 'native-base';
//*components
import {Input} from '../../../../../components/Input/View';
import {Button} from '../../../../../components/Button/View';
//*store
import Modal from '../../../../../components/Modal/View';
//*hooks
import {useEditUser} from './useViewModel';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//*models
import {ModalEditProps} from './view.models';
MaterialIcons.loadFont();

export function ModalEdit(props: ModalEditProps) {
  const {dataUser, handleChangeData, onSubmit} = useEditUser();

  const handleSubmit = async () => {
    await onSubmit();
    props.onClose();
  };
  return (
    <Modal {...props}>
      <ScrollView
        w="100%"
        showsVerticalScrollIndicator={false}
        h={{
          base: '700px',
          lg: 'auto',
        }}>
        <VStack flex={1} p={2} space={3}>
          <Box my={10} alignItems="center">
            <Image
              width={100}
              height={100}
              rounded="full"
              alt="imageuser"
              source={{
                uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
              }}
              position="relative"
            />
            <Box position="absolute" bottom={0} right={'30%'}>
              <MaterialIcons name="pencil" color="#F0DC61" size={30} />
            </Box>
          </Box>

          <Input
            title="Nome"
            w={'64'}
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
        </VStack>
      </ScrollView>
    </Modal>
  );
}
