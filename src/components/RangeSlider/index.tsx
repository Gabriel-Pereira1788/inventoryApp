import React from 'react';
import * as S from 'native-base';
interface RangeProps extends S.ISliderProps {
  title: string;
}

export function RangeSlider({title, ...rest}: RangeProps) {
  return (
    <S.Box alignItems="flex-start" w="100%" my={5}>
      <S.HStack w="100%" alignItems="center" justifyContent="space-between">
        <S.Text bold fontSize="md">
          {title}
        </S.Text>

        <S.Text fontSize="md" color="#9b9a9a" bold>
          $0 - ${rest.maxValue}
        </S.Text>
      </S.HStack>
      <S.Slider
        w="100%"
        maxW="300"
        defaultValue={70}
        minValue={0}
        accessibilityLabel="hello world"
        step={10}
        onChangeEnd={v => console.log(v)}
        {...rest}>
        <S.Slider.Track>
          <S.Slider.FilledTrack />
        </S.Slider.Track>

        <S.Slider.Thumb />
      </S.Slider>
    </S.Box>
  );
}
