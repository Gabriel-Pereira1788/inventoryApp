import {useState} from 'react';

export interface AlertConfig {
  status?: 'error' | 'success' | 'warning' | 'info';
  text?: string;
  title?: string;
  isOpen: boolean;
}
export function useAlert() {
  const [alertConfig, setAlertConfig] = useState<AlertConfig>({
    status: 'success',
    text: '',
    title: '',
    isOpen: false,
  });

  function handleAlertConfig(alert: AlertConfig) {
    setAlertConfig(prev => ({prev, ...alert}));
  }

  return {alertConfig, handleAlertConfig};
}
