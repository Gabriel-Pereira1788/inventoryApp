import {useQuery} from '@tanstack/react-query';
import {Notifications} from '../services/modules/Notifications/Notifications';
import {useUser} from './useUser';

const notifications = new Notifications();
export function useNotificationsStore() {
  const user = useUser();
  const {data, isLoading} = useQuery(['notifications'], () =>
    notifications.get(user?.uid),
  );

  return {
    data,
    isLoading,
  };
}
