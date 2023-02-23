import {VStack} from 'native-base';
import React from 'react';
import {CardProps} from './view.models';

/*
       _light={{backgroundColor: 'white'}}
      _dark={{backgroundColor: 'dark.300'}}
*/
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
