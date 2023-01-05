import * as S from 'native-base';
import React from 'react';

interface SkeletonProps extends S.IStackProps {
  children: React.ReactNode;
  conditionRender?: boolean;
}

export function Skeleton({children, conditionRender, ...rest}: SkeletonProps) {
  if (conditionRender) {
    return (
      <S.VStack
        {...rest}
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
        p={2}
        position="relative">
        <S.Skeleton
          size="5"
          rounded="full"
          position="absolute"
          top={5}
          left={5}
        />
        <S.Skeleton.Text startColor={'#c3c3c285'} />
      </S.VStack>
    );
  }

  return <>{children}</>;
}
