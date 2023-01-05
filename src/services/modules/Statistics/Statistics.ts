import {FilterDate, StatisticsDTO} from '../../../models/Statistics';
import {api} from '../../api';

async function getStatistics(
  id: string,
  filter?: FilterDate,
): Promise<StatisticsDTO> {
  const {data} = await api.get(`get-statistics/${id}?filter=${filter}`);

  return data.statisticsByFilter;
}

export const Statistics = {
  getStatistics,
};
