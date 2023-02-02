import React from 'react';
import * as S from 'native-base';
import {ButtonProps} from './view.models';

export function Button({children, loading, ...rest}: ButtonProps) {
  return (
    <S.Button
      p={3}
      rounded="lg"
      backgroundColor="primary.300"
      opacity={0.7}
      _pressed={{opacity: 0.9}}
      w="100%"
      _text={{textAlign: 'center', fontSize: 'lg', fontWeight: 'bold'}}
      isLoading={loading}
      isLoadingText={'Aguarde...'}
      // _loading={{backgroundColor: '#dddddd'}}
      {...rest}>
      {children}
    </S.Button>
  );
}
