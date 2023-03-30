import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MyAccount from './View';
import {Wrapper} from '../../../components/JestWrapper';
import {useModal} from '../../../hooks/useModal';
import {useAuth} from '../../../hooks/useAuth';

jest.mock('../../../hooks/useModal');
jest.mock('../../../hooks/useAuth');

const mockUseModal = useModal as jest.Mock<ReturnType<typeof useModal>>;
const mockUseAuth = useAuth as jest.Mock<ReturnType<typeof useAuth>>;

const signOutMock = jest.fn();
describe('MyAccount', () => {
  beforeAll(() => {
    mockUseAuth.mockImplementation(() => ({
      signOut: signOutMock,
      createUser: jest.fn(),
      loading: false,
      signIn: jest.fn(),
    }));

    mockUseModal.mockImplementation(() => ({
      handleToggleState: jest.fn(),
      isOpen: true,
    }));
  });
  it('renders the DataView component', () => {
    const {getByTestId} = render(
      <Wrapper>
        <MyAccount />
      </Wrapper>,
    );
    expect(getByTestId('data-view')).toBeDefined();
  });

  it('toggles the ModalEdit component when clicking the DataView component', () => {
    const {getByTestId} = render(
      <Wrapper>
        <MyAccount />
      </Wrapper>,
    );
    fireEvent.press(getByTestId('data-view'));
    expect(getByTestId('modal-edit')).toBeDefined();
  });

  it('calls the signOut function when clicking the exit button', () => {
    const {getByTestId} = render(
      <Wrapper>
        <MyAccount />
      </Wrapper>,
    );
    fireEvent.press(getByTestId('exit-button'));
    expect(signOutMock).toHaveBeenCalled();
  });
});
