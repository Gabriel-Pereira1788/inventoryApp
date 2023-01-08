import React, {ReactElement, ReactNode} from 'react';

type Props = {
  children: ReactNode;
  condition: boolean;
  RenderComponent?: () => ReactElement<any, any>;
};

export function RenderIF({children, condition, RenderComponent}: Props) {
  if (RenderComponent && !condition) {
    return <RenderComponent />;
  }

  return <>{condition && children}</>;
}
