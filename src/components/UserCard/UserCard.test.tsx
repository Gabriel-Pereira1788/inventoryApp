import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserCard from './View';

import {useUser} from '../../store/useUser';
import {Wrapper} from '../JestWrapper';
import {mockedNavigate} from '../../../jestSetup';

jest.mock('@react-navigation/native');
jest.mock('../../store/useUser');

const useUserMock = useUser as jest.Mock<ReturnType<typeof useUser>>;

describe('UserCard component', () => {
  beforeAll(() => {
    useUserMock.mockImplementation(() => ({
      email: 'test@example.com',
      name: 'teste',
      photoURL: 'http://example.com',
      uid: '123',
      createdAt: new Date(),
    }));
  });

  it('should render Image component when user has photoURL', () => {
    const {getByTestId} = render(
      <Wrapper>
        <UserCard />
      </Wrapper>,
    );
    expect(getByTestId('image-user')).toBeDefined();
  });

  it('should navigate to myAccount screen when pressed', () => {
    const {getByTestId} = render(
      <Wrapper>
        <UserCard />
      </Wrapper>,
    );
    fireEvent.press(getByTestId('user-card'));
    expect(mockedNavigate).toHaveBeenCalledWith('myAccount');
  });
});
