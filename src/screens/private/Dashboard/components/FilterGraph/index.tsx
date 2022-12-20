import {IPressableProps, Pressable, Text} from 'native-base';
import React, {ReactNode} from 'react';
import {FilterDate} from '../GraphSales';

export interface Props extends IPressableProps {
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
}: Props) {
  function handleFilter() {
    changeFilter(identifier);
  }

  return (
    <Pressable
      p={2}
      flex={1}
      {...rest}
      isPressed={currentFilter === identifier}
      _pressed={{backgroundColor: 'primary.300'}}
      onPress={handleFilter}>
      <Text
        fontWeight="bold"
        color={currentFilter === identifier ? 'white' : 'text.100'}
        textTransform="uppercase"
        textAlign="center">
        {children}{' '}
      </Text>
    </Pressable>
  );
}
