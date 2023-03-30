import React from 'react';
import {render} from '@testing-library/react-native';
import ModalNotification from './View';
import {Wrapper} from '../../../../../components/JestWrapper';

describe('ModalNotification', () => {
  it('renders with the correct title, text content, and date', () => {
    const title = 'Test Notification';
    const textContent = 'This is a test notification';
    const date = '2022-03-30';
    const id_notification = '123';
    const read = false;

    const {getByText} = render(
      <Wrapper>
        <ModalNotification
          isOpen={true}
          onClose={() => {}}
          title={title}
          textContent={textContent}
          date={date}
          id_notification={id_notification}
          read={read}
        />
        ,
      </Wrapper>,
    );

    const titleElement = getByText(title);
    expect(titleElement).toBeDefined();

    const textContentElement = getByText(textContent);
    expect(textContentElement).toBeDefined();

    const dateElement = getByText(date);
    expect(dateElement).toBeDefined();
  });
});
