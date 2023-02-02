import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import {ReactNode} from 'react';

export interface CardProps extends IVStackProps {
  children: ReactNode;
}
