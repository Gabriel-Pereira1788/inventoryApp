import {User} from '../../../models/Auth';
import {api} from '../../../services/api';
import queryClient from '../../../services/config/queryClient';

export class NotificationsModel {
  private user?: User = queryClient.getQueryData(['user']);
  async get() {
    const {data} = await api.get(`get-notifications/${this.user?.uid}`);

    return data;
  }
}
