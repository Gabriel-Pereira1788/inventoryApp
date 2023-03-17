import {
  FilterDate,
  StatisticsChart,
  StatisticsDTO,
} from '../../../models/Statistics';
import {api} from '../../../services/api';

export class Statistics {
  private idUser?: string;
  constructor(idUser?: string) {
    this.idUser = idUser;
  }

  async get(filter?: FilterDate): Promise<StatisticsDTO | undefined> {
    if (this.idUser) {
      const {data} = await api.get(
        `get-statistics/${this.idUser}?filter=${filter}`,
      );
      return data || null;
    }
  }

  async getStatisticsChart(): Promise<
    | {
        labels: string[];
        values: number[];
      }
    | undefined
  > {
    const {
      data,
    }: {
      data: {
        dataMonth: StatisticsChart;
      };
    } = await api.get(`get-statistics/${this.idUser}/year`);

    console.log('data-statistics', data);
    const labels = data.dataMonth
      ? Object.keys(data.dataMonth).map(month => month.substring(0, 3))
      : [];
    const values = data.dataMonth
      ? Object.values(data.dataMonth).map(statistic => statistic.sales_amount)
      : [];
    return {
      labels,
      values,
    };
  }
}
