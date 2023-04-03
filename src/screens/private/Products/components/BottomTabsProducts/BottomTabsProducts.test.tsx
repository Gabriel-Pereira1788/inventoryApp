import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BottomTabsProducts from './View';
import {Wrapper} from '../../../../../components/JestWrapper';
import {mockedNavigate} from '../../../../../../jestSetup';

describe('BottomTabsProducts', () => {
  it('renders all the icons', () => {
    const {getByTestId} = render(
      <Wrapper>
        <BottomTabsProducts />
      </Wrapper>,
    );

    expect(getByTestId('iconDashboard')).toBeDefined();
    expect(getByTestId('iconProducts')).toBeDefined();
    expect(getByTestId('iconNotifications')).toBeDefined();
  });

  it('calls the redirectScreen function when an icon is pressed', () => {
    const {getByTestId} = render(
      <Wrapper>
        <BottomTabsProducts />
      </Wrapper>,
    );

    fireEvent.press(getByTestId('iconDashboard'));
    expect(mockedNavigate).toHaveBeenCalledWith('dashboard');

    fireEvent.press(getByTestId('iconProducts'));
    expect(mockedNavigate).toHaveBeenCalledWith('products');

    fireEvent.press(getByTestId('iconNotifications'));
    expect(mockedNavigate).toHaveBeenCalledWith('notifications');
  });
});
