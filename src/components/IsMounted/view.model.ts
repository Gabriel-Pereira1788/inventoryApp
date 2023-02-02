import {ReactNode} from 'react';
import {NavigationProps} from '../../routes/navigation';

export interface IsMountedProps {
  propsNavigation: NavigationProps;
  children: ReactNode;
}
