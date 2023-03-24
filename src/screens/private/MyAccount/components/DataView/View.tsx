import * as S from 'native-base';
import React from 'react';
import {useUser} from '../../../../../store/useUser';
//*components
import {Card} from '../../../../../components/Card/View';
import {formatDate} from '../../../../../utils/formatDate';
//*icons
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RenderIF} from '../../../../../components/RenderIF/View';

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
        <RenderIF condition={!!user && !!user.photoURL}>
          <S.Image
            width={100}
            height={100}
            rounded="full"
            alt="imageuser"
            source={{
              uri: user && user.photoURL ? user.photoURL : '',
            }}
          />
        </RenderIF>
        <S.Box position="absolute" top={-10} right={-10}>
          <MaterialIcons name="pencil" color="#104b5b" size={30} />
        </S.Box>

        <S.VStack w="65%" p={2} mt="5%" space={2}>
          <S.HStack
            space={2}
            w="100%"
            alignItems="center"
            justifyContent="flex-start">
            <S.Text fontWeight="bold" fontSize="md" color="#343333a0">
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
            <S.Text fontWeight="bold" fontSize="md" color="#343333a0">
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
            <S.Text fontWeight="bold" fontSize="md" color="#343333a0">
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
