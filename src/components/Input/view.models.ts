import {IInputProps} from 'native-base';

export interface InputProps extends IInputProps {
  title: string;
  error?: boolean;
  errorMessage?: string;
}
