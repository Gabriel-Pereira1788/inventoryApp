import {ReactElement, ReactNode} from 'react';

export interface RenderIfProps {
  children: ReactNode;
  condition: boolean;
  RenderComponent?: () => ReactElement<any, any>;
}
