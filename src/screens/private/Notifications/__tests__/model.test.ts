import {api} from '../../../../services/api';
import {NotificationsModel} from '../model';

jest.mock('../../../../services/api');

const apiMock = api as jest.Mocked<typeof api>;

describe('NotificationsModel', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('read', () => {
    it('should call the API with the correct parameters', async () => {
      const idNotification = '12345';
      const data = {message: 'notification read'};

      apiMock.get.mockResolvedValue({data});

      const result = await new NotificationsModel().read(idNotification);

      expect(apiMock.get).toHaveBeenCalledTimes(1);
      expect(apiMock.get).toHaveBeenCalledWith(
        `read-notification/${idNotification}`,
      );
      expect(result).toEqual(data);
    });

    it('should throw an error if the API call fails', async () => {
      const idNotification = '12345';
      const errorMessage = 'API call failed';

      apiMock.get.mockRejectedValue(new Error(errorMessage));

      await expect(
        new NotificationsModel().read(idNotification),
      ).rejects.toThrow(errorMessage);
    });
  });
});
