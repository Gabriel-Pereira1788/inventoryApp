import {useQuery} from '@tanstack/react-query';
import {api} from '../services/api';
import {useUser} from './useUser';

interface TotalStatistics {
  total_pieces_sales: number;
  total_price_purchased: number;
  total_price_saled: number;
  total_sales: number;
  total_storage: number;
}

async function getTotalStatistics(idUser?: string) {
  const {data} = await api.get<{dataTotal: TotalStatistics}>(
    `/get-statistics/${idUser}`,
  );
  return data;
}

export function useStatistics() {
  const user = useUser();
  return useQuery(['statistics_total'], () => getTotalStatistics(user?.uid));
}
