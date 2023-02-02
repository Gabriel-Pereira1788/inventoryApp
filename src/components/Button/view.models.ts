import {IButtonProps} from 'native-base';
import {ReactNode} from 'react';

export interface ButtonProps extends IButtonProps {
  children: ReactNode;
  loading?: boolean;
}
