import {
  Canvas,
  Group,
  Patch as PatchSkia,
  Text,
  useFont,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {RenderIF} from '../../../../components/RenderIF/View';
import {sizes} from '../../../../constants/sizesDevice';

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
    pos: vec(width, -10),
    c1: vec(width, width - 20 * C),
    c2: vec(width - 2 * C, width),
  };
  const bottomLeft = {
    pos: vec(0, width - 100),
    c1: vec(0, width - 5 * C),
    c2: vec(-2 * C, width),
  };

  const font = useFont(require('../../../../assets/fonts/Jost-Medium.ttf'), 35);
  return (
    <>
      <Canvas
        style={{
          width: sizes.width,
          height: sizes.height,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          top: 0,
        }}>
        <Group>
          <PatchSkia
            colors={colors}
            patch={[topLeft, topRight, bottomRight, bottomLeft]}
          />
          <Group>
            <RenderIF condition={!!font}>
              <Text
                text="Bem vindo
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
