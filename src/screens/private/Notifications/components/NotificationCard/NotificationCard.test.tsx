import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NotificationCard from './View';
import {NotificationsDTO} from '../../../../../models/Notifications';
import {Wrapper} from '../../../../../components/JestWrapper';
import {NOTIFICATIONS_TEXT} from '../../../../../constants/notificationsText';

describe('NotificationCard', () => {
  const notification: NotificationsDTO = {
    item_alert: 'Test alert',
    createdAt: '2022-01-01T00:00:00.000Z',
    type_notification: 'repor estoque',
    read: false,
    id_notification: '123',
    id_user: '123',
  };

  it('should render the notification card with the correct information', () => {
    const {getAllByText, getByText, getByTestId} = render(
      <Wrapper>
        <NotificationCard {...notification} />
      </Wrapper>,
    );
    expect(getAllByText(notification.item_alert)).toBeDefined();
    expect(
      getByText(NOTIFICATIONS_TEXT['repor estoque'].slice(0, 57) + '...'),
    ).toBeDefined();
    expect(getByTestId('date')).toBeDefined();
  });

  it('should open the modal when the notification card is pressed', () => {
    const {getAllByText, getByTestId} = render(
      <Wrapper>
        <NotificationCard {...notification} />
      </Wrapper>,
    );
    expect(getAllByText(notification.item_alert)).toBeDefined();
    fireEvent.press(getByTestId('card-notification'));
    expect(getByTestId('modal-content')).toBeDefined();
  });
});
