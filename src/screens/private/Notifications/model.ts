import {api} from '../../../services/api';
import {Notifications} from '../../../models/Notifications';

export class NotificationsModel {
  async get(idUser?: string) {
    const {data} = await api.get<{notifications: Notifications[]}>(
      `get-notifications/${idUser}`,
    );

    return data.notifications;
  }
}
