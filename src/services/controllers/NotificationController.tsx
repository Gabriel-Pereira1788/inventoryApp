import React, {ReactNode} from 'react';
import {useRemoteNotification} from '../../hooks/useRemoteNotification';

type Props = {children: ReactNode};

export function NotificationController({children}: Props) {
  useRemoteNotification();
  return <>{children}</>;
}
