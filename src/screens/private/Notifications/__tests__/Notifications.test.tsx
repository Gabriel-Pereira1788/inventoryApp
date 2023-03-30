import React from 'react';
import {render} from '@testing-library/react-native';
import Notifications from '../View';
import {Wrapper} from '../../../../components/JestWrapper';

const dataMock = [
  {
    id_notification: '1',
    item_alert: 'Notification 1',
    createdAt: '2022-04-01T12:00:00.000Z',
    type_notification: 'type1',
    read: false,
  },
  {
    id_notification: '2',
    item_alert: 'Notification 2',
    createdAt: '2022-04-02T12:00:00.000Z',
    type_notification: 'type2',
    read: true,
  },
];

jest.mock('../useViewModel', () => ({
  useNotifications: jest.fn(() => ({
    data: dataMock,
  })),
}));

describe('Notifications', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(
      <Wrapper>
        <Notifications />
      </Wrapper>,
    );

    const scrollView = getByTestId('notifications-scrollview');
    expect(scrollView).toBeDefined();
    expect(scrollView.props.style.flex).toEqual(1);
  });

  test('renders notification cards', () => {
    const {getAllByText} = render(
      <Wrapper>
        <Notifications />
      </Wrapper>,
    );

    const notification1 = getAllByText(dataMock[0].item_alert);
    expect(notification1).toBeDefined();

    const notification2 = getAllByText(dataMock[1].item_alert);
    expect(notification2).toBeDefined();
  });
});
