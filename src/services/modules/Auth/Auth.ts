import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../../models/Auth';

export class Auth {
  public static async persistUser() {
    const dataUser: User = JSON.parse(
      (await AsyncStorage.getItem('@user')) as string,
    );

    return dataUser;
  }
}
