import {Pressable, Text} from 'native-base';
import React, {ReactNode} from 'react';
import {IPressableProps} from 'native-base';
import {FilterDate} from '../../useViewModel';

export interface FilterGraphProps extends IPressableProps {
  identifier: FilterDate;
  currentFilter: FilterDate;
  children?: ReactNode;
  changeFilter: (filter: FilterDate) => void;
}

export function FilterGraph({
  identifier,
  currentFilter,
  children,
  changeFilter,
  ...rest
}: FilterGraphProps) {
  function handleFilter() {
    changeFilter(identifier);
  }

  return (
    <Pressable
      p={1}
      rounded="3xl"
      minW={'12'}
      {...rest}
      isPressed={currentFilter === identifier}
      _pressed={{backgroundColor: 'primary.500'}}
      opacity={0.7}
      onPress={handleFilter}>
      <Text
        fontWeight="bold"
        color={currentFilter === identifier ? 'white' : 'text.100'}
        textTransform="uppercase"
        textAlign="center"
        shadow={4}>
        {children}{' '}
      </Text>
    </Pressable>
  );
}
