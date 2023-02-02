import React from 'react';
import {RenderIfProps} from './view.models';

export function RenderIF({
  children,
  condition,
  RenderComponent,
}: RenderIfProps) {
  if (RenderComponent && !condition) {
    return <RenderComponent />;
  }

  return <>{condition && children}</>;
}
