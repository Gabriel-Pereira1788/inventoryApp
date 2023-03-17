import {api} from '../../../services/api';
import {Notifications} from '../../../services/modules/Notifications/Notifications';

export class NotificationsModel extends Notifications {
  super() {}

  async read(idNotification: string) {
    const {data} = await api.get(`read-notification/${idNotification}`);

    return data;
  }
}
