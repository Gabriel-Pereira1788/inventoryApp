import {StatisticsDTO} from '../../../models/Statistics';
import {api} from '../../api';

async function getStatistics(id: string): Promise<StatisticsDTO> {
  const {data} = await api.get(`get-statistics/${id}`);

  console.log(data);
  return data;
}

export const Statistics = {
  getStatistics,
};
