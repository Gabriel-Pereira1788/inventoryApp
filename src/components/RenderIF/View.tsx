import React from 'react';

import {ReactElement, ReactNode} from 'react';

export interface RenderIfProps {
  children: ReactNode;
  condition: boolean;
  RenderComponent?: () => ReactElement<any, any>;
}

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
