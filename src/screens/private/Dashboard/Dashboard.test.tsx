import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Dashboard} from './View';
import {Wrapper} from '../../../components/JestWrapper';
import {useDashboard} from './useViewModel';

// const changeFilter = jest.fn();

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
jest.mock('./hooks/useDashboard');

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
          <Dashboard />
        </Wrapper>,
      );
      expect(getByText('Produtos que entraram')).toBeTruthy();
      expect(getByText('Produtos que sairam')).toBeTruthy();
      expect(getByTestId('total-sale')).toBeTruthy();
      expect(getByText('Product 1')).toBeTruthy();
    });
  });

  describe('Filters', () => {
    it('filters correctly', async () => {
      const {getByText, rerender} = render(
        <Wrapper>
          <Dashboard />
        </Wrapper>,
      );
      fireEvent.press(getByText('1w')),
        await waitFor(() =>
          rerender(
            <Wrapper>
              <Dashboard />
            </Wrapper>,
          ),
        );

      expect(getByText('1m').props.style.color).toEqual('#FFFFFF');
    });

    it('calls changeFilter correctly', () => {
      const {getByText} = render(
        <Wrapper>
          <Dashboard />
        </Wrapper>,
      );
      fireEvent.press(getByText('1w'));
      expect(getByText('1w').props.style.borderColor).toBeTruthy();
      fireEvent.press(getByText('1m'));
      expect(getByText('1m').props.style.borderColor).toBeTruthy();
      expect(changeFilter).toHaveBeenCalled();
    });
  });
});
