import {NotificationsDTO} from '../../../models/Notifications';
import {api} from '../../api';

export class Notifications {
  async get(idUser?: string) {
    const {data} = await api.get<{notifications: NotificationsDTO[]}>(
      `get-notifications/${idUser}`,
    );

    return data.notifications;
  }
}
