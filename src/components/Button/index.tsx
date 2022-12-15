import React, {ReactNode} from 'react';
import {Button as ButtonNative, IButtonProps} from 'native-base';

interface Props extends IButtonProps {
  children: ReactNode;
}

export function Button({children, ...rest}: Props) {
  return (
    <ButtonNative
      p={3}
      rounded="lg"
      backgroundColor="primary.300"
      w="100%"
      _text={{textAlign: 'center', fontSize: 'lg', fontWeight: 'bold'}}
      {...rest}>
      {children}
    </ButtonNative>
  );
}
