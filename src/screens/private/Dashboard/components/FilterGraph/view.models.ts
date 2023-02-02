import {IPressableProps} from 'native-base';
import {ReactNode} from 'react';
import {FilterDate} from '../../view.models';

export interface FilterGraphProps extends IPressableProps {
  identifier: FilterDate;
  currentFilter: FilterDate;
  children?: ReactNode;
  changeFilter: (filter: FilterDate) => void;
}
