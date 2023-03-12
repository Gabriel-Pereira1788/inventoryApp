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
<<<<<<< HEAD
      return data.statisticsByFilter || null;
=======
      return data || null;
>>>>>>> development
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
    } = await api.get(`get-statistics/${this.idUser}`);

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
