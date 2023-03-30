import React from 'react';
import {render} from '@testing-library/react-native';
import Header from './View';
import {useHeader} from './useViewModel';
import {useUser} from '../../../../../store/useUser';
import {Wrapper} from '../../../../../components/JestWrapper';

jest.mock('./useViewModel.ts');
jest.mock('../../../../../store/useUser');

const useHeaderMOck = useHeader as jest.Mock<ReturnType<typeof useHeader>>;
const useUserMock = useUser as jest.Mock<ReturnType<typeof useUser>>;

beforeAll(() => {
  useHeaderMOck.mockImplementation(() => ({
    percentage: '10',
  }));

  useUserMock.mockImplementation(() => ({
    email: 'JohnDoe@gmail.com',
    name: 'John Doe',
    photoURL: 'http://www.example.com',
    uid: '123',
    createdAt: new Date(),
  }));
});

describe('Header', () => {
  it('renders the user name', () => {
    const user = {name: 'John Doe'};
    const {getByText} = render(
      <Wrapper>
        <Header currentFilter="day" />
      </Wrapper>,
    );
    expect(getByText(`Seja bem vindo, ${user.name}`)).toBeDefined();
  });

  it('renders the sales amount', () => {
    const salesAmount = 500;
    const {getByText} = render(
      <Wrapper>
        <Header currentFilter="day" salesAmount={salesAmount} />
      </Wrapper>,
    );
    expect(getByText(`$${salesAmount}`)).toBeDefined();
  });

  it('renders the sales percentage', () => {
    const salesAmount = 500;
    const percentage = '10';
    const {getByText} = render(
      <Wrapper>
        <Header currentFilter="day" salesAmount={salesAmount} />
      </Wrapper>,
    );
    expect(getByText(`+${percentage}%`)).toBeDefined();
  });

  it('renders the total sales text', () => {
    const {getByText} = render(
      <Wrapper>
        <Header currentFilter="day" />
      </Wrapper>,
    );
    expect(getByText('Total de vendas')).toBeDefined();
  });
});
