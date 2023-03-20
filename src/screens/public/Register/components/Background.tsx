import {
  Canvas,
  Group,
  Patch as PatchSkia,
  Text,
  useFont,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {sizes} from '../../../../constants/sizesDevice';

import {RenderIF} from '../../../../components/RenderIF/View';

type Props = {};

export default function Background({}: Props) {
  const colors = ['#0095ff', '#0990ff', '#006bc3'];
  const C = 64;
  const width = sizes.width;
  const topLeft = {pos: vec(0, 0), c1: vec(0, C), c2: vec(C, 0)};
  const topRight = {
    pos: vec(width, 0),
    c1: vec(width, 0),
    c2: vec(width + C, 200),
  };
  const bottomRight = {
    pos: vec(width, -400),
    c1: vec(width, width + 200),
    c2: vec(width - 1 * C, width - 50),
  };
  const bottomLeft = {
    pos: vec(0, sizes.height),
    c1: vec(2, width * 2),
    c2: vec(-2 * C, 100),
  };
  const font = useFont(require('../../../../assets/fonts/Jost-Medium.ttf'), 35);
  return (
    <>
      <Canvas
        style={{
          flex: 1,
          position: 'absolute',
          width: sizes.width,
          height: sizes.height,
        }}>
        <Group>
          <PatchSkia
            colors={colors}
            patch={[topLeft, topRight, bottomRight, bottomLeft]}
          />
          <Group>
            <RenderIF condition={!!font}>
              <Text
                text="Criar conta
              "
                x={40}
                y={100}
                font={font!}
                color="#ffffff"
                style="fill"
              />
            </RenderIF>
          </Group>
        </Group>
      </Canvas>
    </>
  );
}
