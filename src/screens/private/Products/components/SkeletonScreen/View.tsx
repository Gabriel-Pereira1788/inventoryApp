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
        contentContainerStyle={{padding: 10}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        mt={5}
        renderItem={() => (
          <S.HStack
            my={3}
            py={4}
            px={2}
            rounded="2xl"
            backgroundColor="#545353"
            shadow={3}
            w="100%"
            height={'100px'}
            position="relative"
            alignItems="center">
            <S.VStack
              ml={2}
              alignItems="flex-start"
              justifyContent="center"
              space={2}>
              <S.Skeleton h={4} w="140px" rounded="full" />
              <S.HStack w={'100%'} space={2}>
                <S.Skeleton flex={0.5} w="30%" h={3} rounded="full" />
                <S.Skeleton flex={0.5} h={3} rounded="full" />
              </S.HStack>
            </S.VStack>
          </S.HStack>
        )}
      />
    </S.VStack>
  );
}
