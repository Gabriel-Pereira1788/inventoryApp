import React from 'react';
import {SvgProps} from 'react-native-svg';

type Props = {
  Icon: React.FC<SvgProps>;
  size: 'xs' | 'xs2' | 'sm' | 'md' | 'lg';
  color?: string;
  fill?: boolean;
  testID?: string;
};

const SIZES = {
  xs: 12,
  xs2: 18,
  sm: 25,
  md: 35,
  lg: 45,
};

//* Configuração de Icones SVG Escalavel, toda configuração de icones na aplicação podemos fazer aqui

export function IconSVG({Icon, size, fill, color, testID}: Props) {
  return (
    <Icon
      width={SIZES[size]}
      height={SIZES[size]}
      fill={fill && color ? color : 'none'}
      testID={testID}
    />
  );
}
