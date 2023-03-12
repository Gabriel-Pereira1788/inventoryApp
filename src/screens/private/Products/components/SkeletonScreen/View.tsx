import React, {useRef} from 'react';
import * as S from 'native-base';

type Props = {};

export function SkeletonScreen({}: Props) {
  const dataRef = useRef(['', '', '', '']);
  return (
    <S.VStack mt={2} borderTopWidth={1} borderTopColor="#dddddd70">
      <S.FlatList
        data={dataRef.current}
        w="100%"
<<<<<<< HEAD
        mt={5}
        renderItem={() => (
          <S.HStack
            my={3}
            py={4}
            px={2}
            rounded="2xl"
            _light={{backgroundColor: '#fff'}}
            _dark={{backgroundColor: 'backgroundDark'}}
            shadow={3}
            w="100%"
            position="relative"
            alignItems="center">
            <S.Skeleton rounded="full" size="16" />

            <S.VStack
              ml={2}
              alignItems="flex-start"
              justifyContent="center"
              space={2}>
              <S.Skeleton p={2} w="140px" />
              <S.HStack space={2}>
                <S.Skeleton p={2} w="30%" />
                <S.Skeleton p={2} w="50px" />
              </S.HStack>
            </S.VStack>
=======
        contentContainerStyle={{padding: 15}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        mt={5}
        renderItem={() => (
          <S.HStack
            my={5}
            py={4}
            px={2}
            rounded="2xl"
            backgroundColor="#545353"
            shadow={4}
            w="100%"
            height={'120px'}
            position="relative"
            alignItems="center">
            <S.HStack
              ml={2}
              w="100%"
              alignItems="center"
              justifyContent="space-between">
              <S.VStack w="50%" space={3}>
                <S.Skeleton h={5} w="full" rounded="full" />
                <S.HStack w={'full'} space={2}>
                  <S.Skeleton flex={0.5} w="30%" h={4} rounded="full" />
                  <S.Skeleton flex={0.5} h={4} rounded="full" />
                  <S.Skeleton flex={0.5} h={4} rounded="full" />
                </S.HStack>
              </S.VStack>
              <S.Skeleton h={10} w={10} rounded="full" mr={5} />
            </S.HStack>
>>>>>>> development
          </S.HStack>
        )}
      />
    </S.VStack>
  );
}
