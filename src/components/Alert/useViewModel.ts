import React from 'react';

export interface AlertConfig {
  status?: 'error' | 'success' | 'warning' | 'info';
  text?: string;
  title?: string;
  isOpen: boolean;
}

type RefAlert = {
  configAlert: (config: AlertConfig) => void;
};

export const alertRef = React.createRef<RefAlert>();
export function useAlert() {
  const [alertConfig, setAlertConfig] = React.useState<AlertConfig>({
    text: '',
    isOpen: false,
    status: 'success',
    title: '',
  });

  function configAlert(config: AlertConfig) {
    setAlertConfig(prev => ({
      prev,
      ...config,
    }));
  }

  function onClose() {
    configAlert({
      isOpen: false,
    });
  }

  React.useEffect(() => {
    setTimeout(() => {
      configAlert({isOpen: false});
    }, 100000);
  }, []);

  React.useImperativeHandle(alertRef, () => ({
    configAlert,
  }));

  return {alertConfig, onClose, configAlert};
}
