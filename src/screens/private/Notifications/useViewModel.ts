import {useNotificationsStore} from '../../../store/useNotifications';

export function useNotifications() {
  const {data, isLoading} = useNotificationsStore();

  return {
    data,
    isLoading,
  };
}
