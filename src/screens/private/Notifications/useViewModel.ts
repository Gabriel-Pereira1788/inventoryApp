import {useQuery} from '@tanstack/react-query';
import {useUser} from '../../../store/useUser';
import {NotificationsModel} from './model';
const notificationsModel = new NotificationsModel();

export function useNotifications() {
  const user = useUser();
  const {data, isLoading} = useQuery(['notifications'], () =>
    notificationsModel.get(user?.uid),
  );

  return {
    data,
    isLoading,
  };
}
