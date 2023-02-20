import {useEffect, useState} from 'react';
import {IsMountedProps} from './View';

type UseIsMountedProps = Omit<IsMountedProps, 'children'>;

export function useIsMounted({
  propsNavigation,
  cleanUpFunction,
}: UseIsMountedProps) {
  const {navigation} = propsNavigation;
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    navigation.addListener('blur', () => {
      setIsMounted(false);
      if (cleanUpFunction) {
        cleanUpFunction();
      }
    });

    navigation.addListener('focus', () => {
      setIsMounted(true);
    });
  }, [navigation, setIsMounted, cleanUpFunction]);

  return {isMounted};
}
