import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {SkeletonScreen} from './View';
import {Wrapper} from '../../../../../components/JestWrapper';

describe('SkeletonScreen', () => {
  test('renders correctly', async () => {
    const {getByTestId} = render(
      <Wrapper>
        <SkeletonScreen />
      </Wrapper>,
    );
    const flatList = getByTestId('skeleton-flat-list');
    expect(flatList).toBeDefined();
    await waitFor(() => {
      expect(flatList.props.data.length).toBe(4);
    });
  });

  test('renders skeleton items correctly', async () => {
    const {getByTestId, getAllByTestId} = render(
      <Wrapper>
        <SkeletonScreen />
      </Wrapper>,
    );
    const flatList = getByTestId('skeleton-flat-list');
    await waitFor(() => {
      expect(flatList.props.renderItem).toBeDefined();
    });
    const skeletonItems = getAllByTestId('skeleton-item');
    expect(skeletonItems).toHaveLength(4);
  });
});
