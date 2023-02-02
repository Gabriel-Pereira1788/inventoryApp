import {IBoxProps} from 'native-base';
import {ReactNode} from 'react';
import {Paths} from '../../hooks/useBottomTabs';

export interface SharedLayoutProps extends IBoxProps {
  children: ReactNode;
  currentPath?: Paths;
}
