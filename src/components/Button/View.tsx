import React from 'react';
import * as S from 'native-base';
import {MotiView} from 'moti/build';
import {useButton} from './useViewModel';

import {IButtonProps} from 'native-base';
import {ReactNode} from 'react';

export interface ButtonProps extends IButtonProps {
  children: ReactNode;
  type?: 'outlined' | 'normal';
  loading?: boolean;
}

export function Button({
  children,
  loading,
  type = 'normal',
  ...rest
}: ButtonProps) {
  const {buttonAnimation, handleAnimationPress} = useButton();
  return (
    <MotiView
      state={buttonAnimation}
      style={{width: '100%', alignItems: 'center'}}>
      <S.Button
        p={3}
        rounded="lg"
        backgroundColor={type === 'normal' ? 'primary.300' : 'transparent'}
        borderWidth={type === 'normal' ? 0 : 2}
        borderColor="#6c6c6cc0"
        opacity={0.7}
        _pressed={{opacity: 0.9}}
        w="100%"
        _text={{
          textAlign: 'center',
          fontSize: 'lg',
          fontWeight: 'bold',
          color: type === 'normal' ? '#fff' : '#706e6ec0',
        }}
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
