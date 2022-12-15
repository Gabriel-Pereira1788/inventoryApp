import React from 'react';
import {VStack, Text, Input as InputNative, IInputProps} from 'native-base';

interface Props extends IInputProps {
  title: string;
}

export function Input({title, ...rest}: Props) {
  return (
    <VStack>
      <Text
        fontWeight="bold"
        fontSize="xs"
        _light={{color: 'text.100'}}
        _dark={{color: '#fff'}}>
        {title}
      </Text>
      <InputNative
        p={3}
        w="100%"
        _light={{
          backgroundColor: '#fff',
        }}
        _dark={{
          backgroundColor: 'dark.200',
        }}
        borderRadius="xl"
        borderWidth={1}
        borderColor="#0000001b"
        testID="input"
        {...rest}
      />
    </VStack>
  );
}
