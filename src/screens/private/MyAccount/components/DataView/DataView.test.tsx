import React from 'react';
import {render} from '@testing-library/react-native';
//*components
import DataView from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
//*store
import {useUser} from '../../../../../store/useUser';
//*models
import {User} from '../../../../../models/Auth';
//* utils
import {formatDate} from '../../../../../utils/formatDate';

const mockedDataUser: User = {
  email: 'teste@gmail.com',
  name: 'teste',
  photoURL: '',
  uid: '12345',
  createdAt: new Date(),
};

const mockedGetUser = useUser as jest.Mock<any>;

jest.mock('../../../../../store/useUser');

describe('DataView', () => {
  describe('Render component', () => {
    it('render component with data user', () => {
      mockedGetUser.mockImplementation(() => ({...mockedDataUser}));
      const {getByText} = render(
        <Wrapper>
          <DataView />
        </Wrapper>,
      );

      expect(getByText('teste')).toBeTruthy();
      expect(getByText('teste@gmail.com')).toBeTruthy();
      expect(getByText(formatDate(new Date()))).toBeTruthy();
    });
  });
});
