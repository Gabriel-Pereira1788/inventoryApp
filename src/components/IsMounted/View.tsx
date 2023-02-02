import React from 'react';
import {RenderIF} from '../RenderIF/View';
import {IsMountedProps} from './view.model';
import {useIsMounted} from './useViewModel';

export function IsMounted({propsNavigation, children}: IsMountedProps) {
  const {isMounted} = useIsMounted(propsNavigation);
  return <RenderIF condition={isMounted}>{children}</RenderIF>;
}
