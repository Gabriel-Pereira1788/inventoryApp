import {useQuery} from '@tanstack/react-query';
import {User} from '../models/Auth';
import {Auth} from '../services/modules/Auth/Auth';

export function useUser(): User | undefined {
  const {data: user} = useQuery(['user'], Auth.persistUser);

  console.log('query-user', user);
  return user;
}
