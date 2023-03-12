import {useEffect, useState} from 'react';
import {IsMountedProps} from './View';

type UseIsMountedProps = Omit<IsMountedProps, 'children'>;

export function useIsMounted({
  propsNavigation,
<<<<<<< HEAD
  cleanUpFunction,
=======

  mountedFunction,
  unMountedFunction,
>>>>>>> development
}: UseIsMountedProps) {
  const {navigation} = propsNavigation;
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    navigation.addListener('blur', () => {
      setIsMounted(false);
<<<<<<< HEAD
      if (cleanUpFunction) {
        cleanUpFunction();
=======
      if (mountedFunction) {
        mountedFunction();
>>>>>>> development
      }
    });

    navigation.addListener('focus', () => {
      setIsMounted(true);
<<<<<<< HEAD
    });
  }, [navigation, setIsMounted, cleanUpFunction]);
=======
      if (unMountedFunction) {
        unMountedFunction();
      }
    });
  }, [navigation, setIsMounted, mountedFunction, unMountedFunction]);
>>>>>>> development

  return {isMounted};
}
