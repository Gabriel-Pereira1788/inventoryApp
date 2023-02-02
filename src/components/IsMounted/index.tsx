import React from 'react';
import {RenderIF} from '../RenderIF';
import {IsMountedProps} from './ismounted.model';
import {useIsMounted} from './useIsMounted';

export default function IsMounted({propsNavigation, children}: IsMountedProps) {
  const {isMounted} = useIsMounted(propsNavigation);
  return <RenderIF condition={isMounted}>{children}</RenderIF>;
}
