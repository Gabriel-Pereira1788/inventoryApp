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
          </S.HStack>
        )}
      />
    </S.VStack>
  );
}
