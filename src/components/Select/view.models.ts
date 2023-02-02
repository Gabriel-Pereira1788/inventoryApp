import {ISelectProps} from 'native-base';

export type SelectProps<T> = ISelectProps & {
  title?: string;
  error?: Boolean;
  errorMessage?: string;
  items: T[];
};
