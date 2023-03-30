import React from 'react';
import {render} from '@testing-library/react-native';
import {LineChart} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {useChart} from './useViewModel';

jest.mock('./useViewModel');

const useChartMock = useChart as jest.Mock<ReturnType<typeof useChart>>;

beforeAll(() => {
  useChartMock.mockImplementation(() => ({
    conditionRender: true,
    error: {},
    isLoading: false,
    statistics: {
      labels: ['jan', 'fev', 'mar'],
      values: [100, 200, 300],
    },
  }));
});

describe('LineChart', () => {
  it('should render a chart when there are sales data', () => {
    const {getByTestId} = render(
      <Wrapper>
        <LineChart currentFilter="week" />,
      </Wrapper>,
    );
    expect(getByTestId('icon-chart')).toBeNull();
  });

  it('should render an empty message when there are no sales data', () => {
    useChartMock.mockImplementation(() => ({
      conditionRender: false,
      error: {},
      isLoading: false,
      statistics: undefined,
    }));
    const {getByTestId} = render(
      <Wrapper>
        <LineChart currentFilter="week" />
      </Wrapper>,
    );
    expect(getByTestId('icon-chart')).toBeDefined();
  });
});
