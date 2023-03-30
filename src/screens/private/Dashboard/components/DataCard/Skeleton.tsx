import * as S from 'native-base';
import React from 'react';

interface SkeletonProps extends S.IStackProps {
  children: React.ReactNode;
  conditionRender?: boolean;
  testLoadingId?: string;
}

export function Skeleton({
  children,
  conditionRender,
  testLoadingId,
  ...rest
}: SkeletonProps) {
  if (conditionRender) {
    return (
      <S.VStack
        {...rest}
        overflow="hidden"
        alignItems="center"
        justifyContent="center"
        p={2}
        position="relative"
        testID={testLoadingId}>
        <S.Skeleton
          size="8"
          rounded="full"
          position="absolute"
          top={3}
          left={2}
        />
        <S.Skeleton.Text startColor={'#c3c3c285'} />
      </S.VStack>
    );
  }

  return <>{children}</>;
}
