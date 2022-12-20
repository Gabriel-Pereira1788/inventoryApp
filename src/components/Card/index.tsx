import {VStack} from 'native-base';
import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React, {ReactNode} from 'react';

interface Props extends IVStackProps {
  children: ReactNode;
}

export function Card({children, ...rest}: Props) {
  return (
    <VStack
      _light={{backgroundColor: 'white'}}
      _dark={{backgroundColor: 'dark.300'}}
      rounded="md"
      shadow={3}
      {...rest}>
      {children}
    </VStack>
  );
}
