import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {StatisticsDTO} from '../../../../../models/Statistics';
import {ContainerCards} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';

describe('ContainerCards', () => {
  let component: RenderAPI;

  const statisticsMock: StatisticsDTO = {
    parts_entered: 10,
    parts_leave: 5,
    total_product: 20,
    total_storage: 50,
    best_selling: {
      product: null,
      data_sale: null,
    },
    sales: [],
    total_sales: 1000,
  };

  it('should render loading cards when isLoading is true', () => {
    component = render(
      <Wrapper>
        <ContainerCards isLoading={true} />
      </Wrapper>,
    );
    expect(component.getByTestId('loading-card-0')).toBeDefined();
    expect(component.getByTestId('loading-card-1')).toBeDefined();
    expect(component.getByTestId('loading-card-2')).toBeDefined();
    expect(component.getByTestId('loading-card-3')).toBeDefined();
  });

  it('should render data cards when statistics is provided', () => {
    component = render(
      <Wrapper>
        <ContainerCards isLoading={false} statistics={statisticsMock} />,
      </Wrapper>,
    );
    expect(component.getByText('Produtos que entraram')).toBeDefined();
    expect(component.getByText('Produtos que sairam')).toBeDefined();
    expect(component.getByText('Total em produtos')).toBeDefined();
    expect(component.getByText('Total em estoque')).toBeDefined();
    expect(component.getByText('10')).toBeDefined();
    expect(component.getByText('5')).toBeDefined();
    expect(component.getByText('20')).toBeDefined();
    expect(component.getByText('50')).toBeDefined();
  });
});
