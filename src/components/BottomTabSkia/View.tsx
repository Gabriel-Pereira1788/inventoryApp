import {
  Canvas,
  DiffRect,
  LinearGradient,
  rect,
  RoundedRect,
  rrect,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {sizes} from '../../constants/sizesDevice';

type Props = {};

export default function BottomTabSkia({}: Props) {
  const percentageMiddle = (sizes.width / 100) * 50;
  const outer = rrect(rect(0, 0, sizes.width, 80), 10, 10);
  const inner = rrect(rect(percentageMiddle, 0, sizes.width - 300, 40), 0, 20);
  return (
    <Canvas style={{width: sizes.width, height: 80, elevation: 1}}>
      <DiffRect inner={inner} outer={outer} color="#fff" />
    </Canvas>
  );
}
