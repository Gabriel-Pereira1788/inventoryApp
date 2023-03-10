import {useEffect, useState} from 'react';
import {NavigationProps} from '../routes/navigation';

export function useIsMounted({navigation}: NavigationProps) {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    navigation.addListener('blur', () => {
      setIsMounted(false);
    });

    navigation.addListener('focus', () => {
      setIsMounted(true);
    });
  }, [navigation, setIsMounted]);

  return {isMounted};
}
