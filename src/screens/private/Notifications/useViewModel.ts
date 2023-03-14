import {useQuery} from '@tanstack/react-query';
import {NotificationsModel} from './model';

const notificationsModel = new NotificationsModel();
export function useNotifications() {
  const {data, isLoading} = useQuery(['notifications'], notificationsModel.get);

  return {
    data,
    isLoading,
  };
}
