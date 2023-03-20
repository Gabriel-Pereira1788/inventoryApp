import React from 'react';
import * as S from 'native-base';
import {RenderIF} from '../RenderIF/View';

import {IInputProps} from 'native-base';

export interface InputProps extends IInputProps {
  title: string;
  error?: boolean;
  errorMessage?: string;
}

export function Input({title, error, errorMessage, ...rest}: InputProps) {
  return (
    <S.VStack>
      <S.Text
        fontWeight="400"
        fontSize="xs"
        color={rest.color ? rest.color : 'text.100'}>
        {title}
      </S.Text>

      <S.Input
        p={3}
        w="100%"
        backgroundColor="transparent"
        borderWidth={0}
        borderBottomWidth={error ? 2 : 1}
        borderBottomColor="#ddd"
        testID="input"
        {...rest}
      />

      <RenderIF condition={!!errorMessage}>
        <S.Text fontWeight="bold" fontSize="xs" color="#f15353af">
          {errorMessage}
        </S.Text>
      </RenderIF>
    </S.VStack>
  );
}
