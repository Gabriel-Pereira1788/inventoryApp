import * as S from 'native-base';
import React from 'react';
import {useUser} from '../../../../../store/useUser';
//*components
import {Card} from '../../../../../components/Card/View';
import {formatDate} from '../../../../../utils/formatDate';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialIcons.loadFont();

export interface DataViewProps extends S.IPressableProps {}

export default function DataView(props: DataViewProps) {
  const user = useUser();
  console.log('user-photo', user?.photoURL);
  return (
    <Card
      px={4}
      py={3}
      position="relative"
      flexDirection="row"
      alignItems="center">
      <S.Pressable
        display="flex"
        flexDirection="row"
        alignItems="center"
        _pressed={{opacity: 0.7}}
        {...props}>
        <S.Image
          width={100}
          height={100}
          rounded="full"
          alt="imageuser"
          source={{
            uri:
              user && user.photoURL
                ? user.photoURL
                : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          }}
        />
        <S.Box position="absolute" top={-10} right={-10}>
          <MaterialIcons name="pencil" color="#F0DC61" size={30} />
        </S.Box>

        <S.VStack w="65%" p={2} mt="5%" space={2}>
          <S.HStack
            space={2}
            w="100%"
            alignItems="center"
            justifyContent="flex-start">
            <S.Text fontWeight="bold" fontSize="md" color="#ffffffa1">
              Nome:
            </S.Text>
            <S.Text fontWeight="bold" color="primary.300" fontSize="md">
              {user && user?.name}
            </S.Text>
          </S.HStack>
          <S.HStack
            space={2}
            w="90%"
            alignItems="center"
            justifyContent="flex-start">
            <S.Text fontWeight="bold" fontSize="md" color="#ffffffa1">
              Email:
            </S.Text>
            <S.Text fontWeight="bold" color="primary.300" fontSize="md">
              {user && user?.email}
            </S.Text>
          </S.HStack>
          <S.HStack
            space={2}
            w="90%"
            alignItems="center"
            justifyContent="flex-start">
            <S.Text fontWeight="bold" fontSize="md" color="#ffffffa1">
              Criado em:
            </S.Text>
            <S.Text fontWeight="bold" color="primary.300" fontSize="md">
              {user && user.createdAt && formatDate(new Date(user?.createdAt))}
            </S.Text>
          </S.HStack>
        </S.VStack>
      </S.Pressable>
    </Card>
  );
}
