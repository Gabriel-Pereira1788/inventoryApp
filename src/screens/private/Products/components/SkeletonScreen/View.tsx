import React, {useRef} from 'react';
import * as S from 'native-base';
import {sizes} from '../../../../../constants/sizesDevice';

type Props = {};

export function SkeletonScreen({}: Props) {
  const dataRef = useRef(['', '', '', '']);
  return (
    <S.VStack mt={2} borderTopWidth={1} borderTopColor="#dddddd70">
      <S.FlatList
        data={dataRef.current}
        w="100%"
        contentContainerStyle={{
          padding: 15,
          paddingVertical: 25,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        mt={5}
        renderItem={() => (
          <S.HStack
            my={5}
            py={4}
            px={2}
            rounded="2xl"
            backgroundColor="#fff"
            shadow={4}
            w="100%"
            height={'120px'}
            position="relative"
            alignItems="center">
            <S.HStack
              ml={2}
              w="100%"
              alignItems="center"
              justifyContent="flex-start"
              space={3}>
              <S.Skeleton
                h={(sizes.width / 100) * 20}
                w={(sizes.width / 100) * 20}
                rounded="lg"
                mr={5}
              />
              <S.VStack w="50%" space={3}>
                <S.Skeleton h={5} w="full" rounded="full" />
                <S.HStack w={'full'} space={2}>
                  <S.Skeleton flex={0.5} w="30%" h={4} rounded="full" />
                  <S.Skeleton flex={0.5} h={4} rounded="full" />
                  <S.Skeleton flex={0.5} h={4} rounded="full" />
                </S.HStack>
              </S.VStack>
            </S.HStack>
          </S.HStack>
        )}
      />
    </S.VStack>
  );
}
