import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Filters} from './View';
import {useFilter} from './useViewModel';
import {Wrapper} from '../../../../../components/JestWrapper';

jest.mock('./useViewModel');

const useFiltersMock = useFilter as jest.Mock<any>;
const onClose = jest.fn();
const handleCurrentMock = jest.fn();
const handleDataFilterMock = jest.fn();

const setFiltersMock = jest.fn();

describe('Filters component', () => {
  beforeAll(() => {
    useFiltersMock.mockImplementation(() => ({
      dataFilter: {
        price: [100, 300],
        storage: [0, 50],
      },
      totalStorage: 100,
      totalValue: 500,
      handleDataFilter: handleDataFilterMock,
      handleCurrentCategory: handleCurrentMock,
      setFilters: setFiltersMock,
    }));
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <Wrapper>
        <Filters onClose={onClose} />
      </Wrapper>,
    );
    expect(getByText('Filtros')).toBeDefined();
  });

  it('apply filters correctly', () => {
    const {getByText, getByPlaceholderText, getByTestId} = render(
      <Wrapper>
        <Filters onClose={onClose} isOpen={true} />,
      </Wrapper>,
    );

    expect(getByText('Filtros')).toBeDefined();

    const categorySelect = getByPlaceholderText('Categorias');
    fireEvent(categorySelect, 'onValueChange', 'Eletrônicos');

    expect(handleCurrentMock).toHaveBeenCalledWith('Eletrônicos');

    const priceSlider = getByTestId('price-slider');
    fireEvent(priceSlider, 'change', 400);
    expect(handleDataFilterMock).toHaveBeenCalledWith('price', 400);

    const storageSlider = getByTestId('storage-slider');
    fireEvent(storageSlider, 'change', 80);
    expect(handleDataFilterMock).toHaveBeenCalledWith('storage', 80);

    const confirmButton = getByTestId('button-apply-filter');
    fireEvent.press(confirmButton);
    expect(setFiltersMock).toHaveBeenCalledTimes(1);
  });
});
