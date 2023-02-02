import {VStack} from 'native-base';
import React from 'react';
import {CardProps} from './view.models';

export function Card({children, ...rest}: CardProps) {
  return (
    <VStack
      _light={{backgroundColor: 'white'}}
      _dark={{backgroundColor: 'dark.300'}}
      rounded="md"
      shadow={3}
      overflow="hidden"
      {...rest}>
      {children}
    </VStack>
  );
}
