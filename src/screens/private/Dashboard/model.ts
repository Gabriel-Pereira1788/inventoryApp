import {MONTHS_DATA} from '../../../constants/months';
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

  async get(filter?: FilterDate): Promise<StatisticsDTO | undefined | null> {
    if (this.idUser) {
      const {data} = await api.get(
        `get-statistics/${this.idUser}?filter=${filter}`,
      );
      return data || null;
    }

    return null;
  }

  async getStatisticsChart(idUser?: string): Promise<
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
    } = await api.get(`get-statistics/${idUser}`);
    // Object.values(data.dataMonth).map(statistic => statistic.sales_amount)

    const labels = MONTHS_DATA.map(month => month.slice(0, 3));
    const values = MONTHS_DATA.map((month, index) => {
      let amount = index * 0;
      Object.entries(data.dataMonth).map(([key, value]) => {
        if (month.toLowerCase() === key.toLowerCase()) {
          amount = value.sales_amount;
        }
      });

      return amount;
    });
    return {
      labels,
      values,
    };
  }
}
