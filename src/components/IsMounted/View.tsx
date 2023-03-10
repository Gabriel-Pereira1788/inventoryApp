import React from 'react';
import {RenderIF} from '../RenderIF/View';

import {ReactNode} from 'react';
import {NavigationProps} from '../../routes/navigation';
import {useIsMounted} from './useViewModel';

export interface IsMountedProps {
  propsNavigation: NavigationProps;
  children: ReactNode;
<<<<<<< HEAD
  cleanUpFunction?: () => void;
=======
  mountedFunction?: () => void;
  unMountedFunction?: () => void;
>>>>>>> development
}

export function IsMounted({children, ...rest}: IsMountedProps) {
  const {isMounted} = useIsMounted(rest);
  return <RenderIF condition={isMounted}>{children}</RenderIF>;
}
