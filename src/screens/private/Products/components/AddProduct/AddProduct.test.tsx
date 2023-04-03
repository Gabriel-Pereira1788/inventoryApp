import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {AddProduct} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {useAddProduct} from './useViewModel';

const onSubmitMock = jest.fn();
jest.mock('./useViewModel');

const useAddProductMock = useAddProduct as jest.Mock<any>;

describe('AddProduct component', () => {
  beforeAll(() => {
    useAddProductMock.mockImplementation(() => ({
      isOpen: false,
      pressed: {value: false},
      uas: {},
      loadingSubmit: false,
      handleToggleState: jest.fn(),
      onSubmit: onSubmitMock,
    }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', async () => {
    const {getByTestId, queryByTestId} = render(
      <Wrapper>
        <AddProduct />
      </Wrapper>,
    );
    const plusIcon = getByTestId('plus-icon');
    expect(plusIcon).not.toBeNull();
    expect(queryByTestId('modal')).toBeTruthy();
  });

  it('should open the modal when plus icon is pressed', async () => {
    const {getByTestId, queryByTestId} = render(
      <Wrapper>
        <AddProduct />
      </Wrapper>,
    );
    const plusIcon = getByTestId('plus-icon');
    fireEvent.press(plusIcon);
    await waitFor(() => expect(queryByTestId('modal')).not.toBeNull());
  });
});
