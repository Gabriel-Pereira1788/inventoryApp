import {useQueryClient} from '@tanstack/react-query';
import {User} from '../models/Auth';

export function useUser(): User | undefined {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(['user']);
}
