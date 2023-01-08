import React, {ReactNode} from 'react';
import * as S from 'native-base';

type SkeletonProps = {
  condition: boolean;
  children: ReactNode;
};

export default function Skeleton({condition, children}: SkeletonProps) {
  if (!condition) {
    return <>{children}</>;
  }

  return (
    <S.VStack
      w="100%"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      p={2}
      position="relative"
      space={5}
      testID="skeletonLoading">
      <S.HStack w="100%" alignItems="center" justifyContent="center" mb={5}>
        <S.Skeleton size={5} rounded="sm" w="80%" startColor={'#c3c3c285'} />
      </S.HStack>

      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="flex-start"
        space={2}>
        <S.Skeleton size={2} rounded="sm" w="20%" startColor={'#c3c3c285'} />
        <S.Skeleton size={2} rounded="sm" w="60%" startColor={'#c3c3c285'} />
      </S.HStack>
      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="flex-start"
        space={2}>
        <S.Skeleton size={2} rounded="sm" w="20%" startColor={'#c3c3c285'} />
        <S.Skeleton size={2} rounded="sm" w="60%" startColor={'#c3c3c285'} />
      </S.HStack>
      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="flex-start"
        space={2}>
        <S.Skeleton size={2} rounded="sm" w="20%" startColor={'#c3c3c285'} />
        <S.Skeleton size={2} rounded="sm" w="60%" startColor={'#c3c3c285'} />
      </S.HStack>
      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="flex-start"
        space={2}>
        <S.Skeleton size={2} rounded="sm" w="20%" startColor={'#c3c3c285'} />
        <S.Skeleton size={2} rounded="sm" w="60%" startColor={'#c3c3c285'} />
      </S.HStack>
      <S.HStack
        w="100%"
        alignItems="center"
        justifyContent="flex-start"
        space={2}>
        <S.Skeleton size={2} rounded="sm" w="20%" startColor={'#c3c3c285'} />
        <S.Skeleton size={2} rounded="sm" w="60%" startColor={'#c3c3c285'} />
      </S.HStack>
    </S.VStack>
  );
}
