import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Dashboard} from '../View';
import {Wrapper} from '../../../../components/JestWrapper';
import {useDashboard} from '../useViewModel';

const mockedDataDashboard = {
  statistics: {
    parts_entered: 100,
    parts_leave: 20,
    total_sales: 200,
    best_selling: {
      product: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id_product: '2',
        id_user: '3',
        name_product: 'Product 1',
        price_purchased: 100,
        price_saled: 200,
        storage: 20,
      },
      data_sale: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: '1',
        id_product: '2',
        id_user: '3',
        pieces_saled: 20,
        price_purchased: 100,
        price_saled: 200,
        storage: 20,
      },
    },
  },
  currentFilter: 'week',
  isLoading: false,
};

const mockedUseDashboard = useDashboard as jest.Mock<any>;
jest.mock('../useViewModel');

const navigation = {
  addListener: jest.fn(),
} as any;
const route = {} as any;

describe('Dashboard', () => {
  const changeFilter = jest.fn();
  beforeEach(() => {
    mockedUseDashboard.mockImplementation(() => ({
      ...mockedDataDashboard,
      changeFilter: changeFilter,
    }));
  });

  describe('Render correctly', () => {
    it('renders correctly', () => {
      const {getByText, getByTestId} = render(
        <Wrapper>
          <Dashboard navigation={navigation} route={route} />
        </Wrapper>,
      );
      expect(getByText('Produtos que entraram')).toBeDefined();
      expect(getByText('Produtos que sairam')).toBeDefined();
      expect(getByText('Total em produtos')).toBeDefined();
      expect(getByText('Total em estoque')).toBeDefined();
      expect(getByTestId('total-sale')).toBeDefined();
    });
  });

  describe('Filters', () => {
    it('filters correctly', async () => {
      const {getByText} = render(
        <Wrapper>
          <Dashboard navigation={navigation} route={route} />
        </Wrapper>,
      );
      fireEvent.press(getByText('1d'));

      expect(changeFilter).toHaveBeenCalledWith('day');
      fireEvent.press(getByText('1w'));
      expect(changeFilter).toHaveBeenCalledWith('week');
      fireEvent.press(getByText('1m'));
      expect(changeFilter).toHaveBeenCalledWith('month');
      fireEvent.press(getByText('3m'));
      expect(changeFilter).toHaveBeenCalledWith('3 month');
      fireEvent.press(getByText('6m'));
      expect(changeFilter).toHaveBeenCalledWith('6 month');
      fireEvent.press(getByText('1y'));
      expect(changeFilter).toHaveBeenCalledWith('year');
    });
  });
});
