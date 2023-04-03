import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Controllers} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {useControllers} from './useViewModel';

jest.mock('./useViewModel');

const handleSearchMock = jest.fn();

const useControllersMock = useControllers as jest.Mock<
  ReturnType<typeof useControllers>
>;

describe('Controllers component', () => {
  beforeAll(() => {
    useControllersMock.mockImplementation(() => ({
      handleSearch: handleSearchMock,
      searchText: '',
    }));
  });
  it('renders search input and filters icon', () => {
    const {getByPlaceholderText, getByTestId} = render(
      <Wrapper>
        <Controllers />
      </Wrapper>,
    );
    const searchInput = getByPlaceholderText('Pesquisar...');
    const filtersIcon = getByTestId('filtersIcon');

    expect(searchInput).toBeTruthy();
    expect(filtersIcon).toBeTruthy();
  });

  it('updates search text value when typing', () => {
    const {getByPlaceholderText} = render(
      <Wrapper>
        <Controllers />
      </Wrapper>,
    );
    const searchInput = getByPlaceholderText('Pesquisar...');

    fireEvent.changeText(searchInput, 'new value');

    expect(handleSearchMock).toHaveBeenCalledWith('new value');
  });

  it('opens filters modal when filters icon is pressed', () => {
    const {getByTestId} = render(
      <Wrapper>
        <Controllers />
      </Wrapper>,
    );
    const filtersIcon = getByTestId('filtersIcon');

    fireEvent.press(filtersIcon);

    const filtersModal = getByTestId('filtersModal');
    expect(filtersModal).toBeTruthy();
  });
});
