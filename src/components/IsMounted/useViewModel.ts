import {useEffect, useState} from 'react';
import {IsMountedProps} from './View';

type UseIsMountedProps = Omit<IsMountedProps, 'children'>;

export function useIsMounted({
  propsNavigation,

  mountedFunction,
  unMountedFunction,
}: UseIsMountedProps) {
  const {navigation} = propsNavigation;
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    navigation.addListener('blur', () => {
      setIsMounted(false);
      if (mountedFunction) {
        mountedFunction();
      }
    });

    navigation.addListener('focus', () => {
      setIsMounted(true);
      if (unMountedFunction) {
        unMountedFunction();
      }
    });
  }, [navigation, setIsMounted, mountedFunction, unMountedFunction]);

  return {isMounted};
}
