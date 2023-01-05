import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  condition: boolean;
};

export function RenderIF({children, condition}: Props) {
  return <>{condition && children}</>;
}
