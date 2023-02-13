import React from 'react';
import * as S from 'native-base';
import {MotiView} from 'moti/build';
import {useButton} from './useViewModel';

import {IButtonProps} from 'native-base';
import {ReactNode} from 'react';

export interface ButtonProps extends IButtonProps {
  children: ReactNode;
  loading?: boolean;
}

export function Button({children, loading, ...rest}: ButtonProps) {
  const {buttonAnimation, handleAnimationPress} = useButton();
  return (
    <MotiView
      state={buttonAnimation}
      style={{width: '100%', alignItems: 'center'}}>
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
        onPressIn={handleAnimationPress('pressIn')}
        onPressOut={handleAnimationPress('pressOut')}
        // _loading={{backgroundColor: '#dddddd'}}
        {...rest}>
        {children}
      </S.Button>
    </MotiView>
  );
}
