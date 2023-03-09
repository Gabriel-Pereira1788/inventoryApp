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
      backgroundColor="#3b3a3a"
      rounded="md"
      shadow={3}
      overflow="hidden"
      {...rest}>
      {children}
    </VStack>
  );
}
