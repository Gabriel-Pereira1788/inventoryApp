import {api} from '../../../../services/api';
import {Statistics} from '../model';

const apiMock = api as jest.Mocked<typeof api>;

jest.mock('../../../../services/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

describe('Statistics', () => {
  let statistics: Statistics;
  beforeEach(() => {
    statistics = new Statistics('user-id');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getStatisticsChart', () => {
    it('should return the statistics chart', async () => {
      const getStatisticsChartMock = jest.spyOn(
        statistics,
        'getStatisticsChart',
      );
      const data = {
        dataMonth: {
          january: {
            sales_amount: 10,
          },
          february: {
            sales_amount: 20,
          },
        },
      };

      apiMock.get.mockResolvedValue({data});

      const result = await statistics.getStatisticsChart('user-id');

      expect(getStatisticsChartMock).toHaveBeenCalledWith('user-id');
      expect(result).toEqual({
        labels: [
          'jan',
          'fev',
          'mar',
          'abr',
          'mai',
          'jun',
          'jul',
          'ago',
          'set',
          'out',
          'nov',
          'dez',
        ],
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      });
    });
  });

  describe('get', () => {
    it('should return the statistics data for a user', async () => {
      const data = {
        total_sales_amount: 1000,
        total_sales_count: 50,
      };

      apiMock.get.mockResolvedValue({data});

      const result = await statistics.get();

      expect(apiMock.get).toHaveBeenCalledWith(
        'get-statistics/user-id?filter=undefined',
      );
      expect(result).toEqual(data);
    });
  });
});
