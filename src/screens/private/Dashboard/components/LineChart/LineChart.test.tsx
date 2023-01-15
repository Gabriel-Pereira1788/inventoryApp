import React from 'react';
import {render} from '@testing-library/react-native';
import {LineChart} from '.';
import {EMPTY_MESSAGES} from '../../../../../constants/emptyMessages';
import {Wrapper} from '../../../../../components/JestWrapper';
import {useChart} from '../../hooks/useChart';

const mockedStatistics = {
  statistics: {
    labels: ['Jan', 'Feb', 'Mar'],
    values: [10, 20, 30],
  },
  conditionRender: false,
};

const mockedUseChart = useChart as jest.Mock<any>;
jest.mock('../../hooks/useChart');

describe('LineChart', () => {
  it('renders the chart correctly', () => {
    mockedUseChart.mockImplementation(() => ({
      data: mockedStatistics,
    }));
    const {getByText} = render(
      <Wrapper>
        <LineChart />
      </Wrapper>,
    );
    expect(getByText('Jan')).toBeTruthy();
  });

  it('renders the empty message when there is no data', () => {
    mockedUseChart.mockImplementation(() => ({
      data: {
        statistics: {
          labels: undefined,
          values: undefined,
        },
        conditionRender: false,
      },
    }));
    const {getByText, getByTestId} = render(
      <Wrapper>
        <LineChart />,
      </Wrapper>,
    );
    expect(getByText(EMPTY_MESSAGES.statistics)).toBeTruthy();
    expect(getByTestId('icon-chart')).toBeTruthy();
  });
});
