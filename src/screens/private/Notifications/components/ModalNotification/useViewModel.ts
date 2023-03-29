import {useQueryClient} from '@tanstack/react-query';
import {useCallback, useEffect} from 'react';
import {NotificationsModel} from '../../model';
import {ModalNotificationProps} from './View';

type Props = Pick<
  ModalNotificationProps,
  'read' | 'id_notification' | 'isOpen'
>;

const notificationsModel = new NotificationsModel();
export function useModalNotification({id_notification, read, isOpen}: Props) {
  const queryClient = useQueryClient();

  const readNotification = useCallback(async () => {
    try {
      await notificationsModel.read(id_notification);
      queryClient.invalidateQueries(['notifications']);
      queryClient.refetchQueries(['notifications']);
    } catch (error) {}
  }, [id_notification, queryClient]);

  useEffect(() => {
    if (isOpen && !read) {
      readNotification();
    }
  }, [isOpen, read, readNotification]);
}
