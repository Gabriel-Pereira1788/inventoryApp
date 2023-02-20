import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import BottomTabs from './View';
import {Wrapper} from '../JestWrapper';
import {mockedNavigate} from '../../../jestSetup';

describe('BottomTabs', () => {
  describe('Render component', () => {
    it('render component correctly', () => {
      const {getByTestId} = render(
        <Wrapper>
          <BottomTabs />
        </Wrapper>,
      );

      expect(getByTestId('containerNavigation')).toBeTruthy();
      expect(getByTestId('iconDashboard')).toBeTruthy();
      expect(getByTestId('iconProducts')).toBeTruthy();
      expect(getByTestId('iconNotifications')).toBeTruthy();
    });
  });

  describe('Redirect screens', () => {
    it('redirect to dashboard', () => {
      const {getByTestId} = render(
        <Wrapper>
          <BottomTabs />
        </Wrapper>,
      );

      fireEvent.press(getByTestId('iconDashboard'));

      expect(mockedNavigate).toHaveBeenCalledWith('dashboard');
    });
    it('redirect to products', () => {
      const {getByTestId} = render(
        <Wrapper>
          <BottomTabs />
        </Wrapper>,
      );

      fireEvent.press(getByTestId('iconProducts'));

      expect(mockedNavigate).toHaveBeenCalledWith('products');
    });
    it('redirect to notifications', () => {
      const {getByTestId} = render(
        <Wrapper>
          <BottomTabs />
        </Wrapper>,
      );

      fireEvent.press(getByTestId('iconNotifications'));

      expect(mockedNavigate).toHaveBeenCalledWith('notifications');
    });
  });
});
