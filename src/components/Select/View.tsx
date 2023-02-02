import React from 'react';
import * as S from 'native-base';
import {RenderIF} from '../RenderIF/View';
import {SelectProps} from './view.models';

export function Select<
  T extends {id?: string | number; value: string; label: string},
>({title, error, errorMessage, items, ...rest}: SelectProps<T>) {
  return (
    <S.VStack w="100%">
      <S.Text
        fontWeight="bold"
        fontSize="xs"
        _light={{color: 'text.100'}}
        _dark={{color: '#fff'}}>
        {title}
      </S.Text>

      <S.Select
        fontSize="lg"
        p={3}
        w="100%"
        alignItems="center"
        justifyContent="center"
        _light={{
          backgroundColor: '#fff',
        }}
        _dark={{
          backgroundColor: 'dark.200',
        }}
        borderRadius="xl"
        borderWidth={error ? 2 : 1}
        borderColor={error ? '#f15353af' : '#0000001b'}
        {...rest}>
        {items.length > 0 &&
          items.map((item, index) => (
            <S.Select.Item
              key={item.id ? item.id : index}
              value={item.value}
              label={item.label}
            />
          ))}
      </S.Select>

      <RenderIF condition={!!errorMessage}>
        <S.Text fontWeight="bold" fontSize="xs" color="#f15353af">
          {errorMessage}
        </S.Text>
      </RenderIF>
    </S.VStack>
  );
}
