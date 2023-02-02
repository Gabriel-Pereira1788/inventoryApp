import {IStackProps} from 'native-base';

export type DataCardProps<T> = IStackProps & {
  textCard: T;
  data?: number;
  loadingData?: boolean;
};
