import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {Wrapper} from '../JestWrapper';
import {Alert} from './View';

describe('Alert', () => {
  describe('Render component correctly', () => {
    it('should render correctly', () => {
      const closeFn = jest.fn();
      const {getByText} = render(
        <Wrapper>
          <Alert
            text="teste"
            title="title test"
            isOpen={true}
            onClose={closeFn}
          />
        </Wrapper>,
      );

      expect(getByText('teste')).toBeTruthy();
      expect(getByText('title test')).toBeTruthy();
    });
    jest.useFakeTimers();

    it('close component with timeout', async () => {
      const closeFn = jest.fn();

      render(
        <Wrapper>
          <Alert
            text="teste"
            title="title test"
            isOpen={true}
            onClose={closeFn}
          />
        </Wrapper>,
      );

      jest.advanceTimersByTime(100000);

      await waitFor(() => expect(closeFn).toHaveBeenCalled());
    });
  });
});
