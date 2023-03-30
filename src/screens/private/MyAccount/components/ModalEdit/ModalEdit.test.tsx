import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ModalEdit} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';

// Mock useEditUser hook

const mockChange = jest.fn();
const mockSubmit = jest.fn();
jest.mock('./useViewModel', () => ({
  useEditUser: () => ({
    dataUser: {name: 'John Doe', email: 'john.doe@example.com'},
    handleChangeData: mockChange,
    onSubmit: mockSubmit,
    handleSetImage: jest.fn(),
  }),
}));

describe('ModalEdit', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(
      <Wrapper>
        <ModalEdit isOpen={true} />
      </Wrapper>,
    );
    expect(getByTestId('modal-edit')).toBeDefined();
  });

  test('submits form data on button press', async () => {
    const {getByTestId} = render(
      <Wrapper>
        <ModalEdit isOpen={true} />
      </Wrapper>,
    );
    const nameInput = getByTestId('input-name');
    const emailInput = getByTestId('input-email');
    const confirmButton = getByTestId('button-confirm');

    fireEvent.changeText(nameInput, 'Jane Doe');
    fireEvent.changeText(emailInput, 'jane.doe@example.com');
    fireEvent.press(confirmButton);

    expect(mockChange).toHaveBeenCalledWith('name', 'Jane Doe');
    expect(mockChange).toHaveBeenCalledWith('email', 'jane.doe@example.com');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
