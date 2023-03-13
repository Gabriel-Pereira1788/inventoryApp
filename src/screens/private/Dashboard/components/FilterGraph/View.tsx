import {Pressable, Text} from 'native-base';
import React, {ReactNode} from 'react';
import {IPressableProps} from 'native-base';
import {FilterDate} from '../../useViewModel';

import {MotiView} from 'moti';
import {useFilterGraph} from './useViewModel';

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
  const {handleFilter, filterAnimation} = useFilterGraph({
    changeFilter,
    currentFilter,
    identifier,
  });

  return (
    <MotiView state={filterAnimation} style={{borderRadius: 30}}>
      <Pressable
        p={1}
        minW={'12'}
        {...rest}
        isPressed={currentFilter === identifier}
        opacity={0.7}
        onPress={handleFilter}>
        <Text
          fontWeight="400"
          fontFamily="body"
          color={currentFilter === identifier ? 'white' : 'text.100'}
          textTransform="uppercase"
          textAlign="center"
          shadow={4}>
          {children}{' '}
        </Text>
      </Pressable>
    </MotiView>
  );
}
