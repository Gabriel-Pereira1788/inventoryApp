import React from 'react';
import * as S from 'native-base';
interface RangeProps extends S.ISliderProps {
  title: string;
  prefix?: string;
}

export function RangeSlider({title, prefix, ...rest}: RangeProps) {
  return (
    <S.Box alignItems="flex-start" w="100%" my={5}>
      <S.HStack w="100%" alignItems="center" justifyContent="space-between">
        <S.Text bold fontSize="md">
          {title}:{' '}
          <S.Text color="#7b7575">
            {prefix}
            {rest.value}
          </S.Text>
        </S.Text>

        <S.Text fontSize="md" color="#9b9a9a" bold>
          {prefix}0 - {prefix}
          {rest.maxValue}
        </S.Text>
      </S.HStack>
      <S.Slider
        w="100%"
        maxW="300"
        defaultValue={70}
        minValue={0}
        accessibilityLabel="hello world"
        step={10}
        {...rest}>
        <S.Slider.Track bgColor="gray.200">
          <S.Slider.FilledTrack bgColor="primary.300" />
        </S.Slider.Track>

        <S.Slider.Thumb bgColor="primary.300" />
      </S.Slider>
    </S.Box>
  );
}
