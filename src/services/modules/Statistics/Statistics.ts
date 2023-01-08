import {
  FilterDate,
  StatisticsChart,
  StatisticsDTO,
} from '../../../models/Statistics';
import {api} from '../../api';

async function getStatistics(
  id?: string,
  filter?: FilterDate,
): Promise<StatisticsDTO | undefined> {
  if (id) {
    const {data} = await api.get(`get-statistics/${id}?filter=${filter}`);
    return data.statisticsByFilter;
  }
}

async function getStatisticsChart(id?: string): Promise<
  | {
      labels: string[];
      values: number[];
    }
  | undefined
> {
  if (id) {
    const {
      data,
    }: {
      data: {
        dataMonth: StatisticsChart;
      };
    } = await api.get(`get-statistics/${id}`);

    const labels = Object.keys(data.dataMonth).map(month =>
      month.substring(0, 3),
    );
    const values = Object.values(data.dataMonth).map(
      statistic => statistic.sales_amount,
    );
    return {
      labels,
      values,
    };
  }
}

export const Statistics = {
  getStatistics,
  getStatisticsChart,
};
