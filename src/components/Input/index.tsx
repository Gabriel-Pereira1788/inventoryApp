import React from 'react';
import * as S from 'native-base';

interface Props extends S.IInputProps {
  title: string;
  error?: boolean;
  errorMessage?: string;
}

export function Input({title, error, errorMessage, ...rest}: Props) {
  return (
    <S.VStack>
      <S.Text
        fontWeight="bold"
        fontSize="xs"
        _light={{color: 'text.100'}}
        _dark={{color: '#fff'}}>
        {title}
      </S.Text>
      <S.Input
        p={3}
        w="100%"
        _light={{
          backgroundColor: '#fff',
        }}
        _dark={{
          backgroundColor: 'dark.200',
        }}
        borderRadius="xl"
        borderWidth={error ? 2 : 1}
        borderColor={error ? '#f15353af' : '#0000001b'}
        testID="input"
        {...rest}
      />
      {errorMessage && (
        <S.Text fontWeight="bold" fontSize="xs" color="#f15353af">
          {errorMessage}
        </S.Text>
      )}
    </S.VStack>
  );
}
