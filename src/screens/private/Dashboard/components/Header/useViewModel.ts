import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useEffect, useState} from 'react';
import {calculatePercentage} from '../../../../../utils/calculatePercentage';
import {HeaderProps} from './View';

type UseHeaderProps = Pick<HeaderProps, 'currentFilter' | 'salesAmount'>;

export function useHeader({currentFilter, salesAmount}: UseHeaderProps) {
  const [percentage, setPercentage] = useState('0');
  const setStorageAmount = useCallback(async () => {
    if (salesAmount === undefined) {
      return;
    }
    const amountStorage = await AsyncStorage.getItem(currentFilter.trim());
    if (!amountStorage) {
      await AsyncStorage.setItem(currentFilter.trim(), String(salesAmount));
      return;
    }

    if (Number(amountStorage) !== salesAmount) {
      console.log('entrei aqui');
      const difference = Number(salesAmount) - Number(amountStorage);
      const percentageDifference = calculatePercentage(difference, salesAmount);
      setPercentage(percentageDifference.toFixed(2));
    } else {
      setPercentage('');
    }
  }, [salesAmount, currentFilter]);
  useEffect(() => {
    setStorageAmount();
  }, [setStorageAmount]);

  return {percentage};
}
