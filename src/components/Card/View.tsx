import {VStack} from 'native-base';
import React from 'react';

import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import {ReactNode} from 'react';

export interface CardProps extends IVStackProps {
  children: ReactNode;
}

export function Card({children, ...rest}: CardProps) {
  return (
    <VStack
      backgroundColor="#fffdfd"
      rounded="md"
      shadow={3}
      overflow="hidden"
      {...rest}>
      {children}
    </VStack>
  );
}
