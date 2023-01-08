import React from 'react';
import {render} from '@testing-library/react-native';
import {DataCard} from '.';
import {Wrapper} from '../../../../../components/JestWrapper';

describe('DataCard', () => {
  describe('Render component', () => {
    it('render component with mocked data', () => {
      // const {Icon} = require('react-native-vector-icons/Ionicons');

      // Icon.loadFont();
      const {getByTestId, getByText} = render(
        <Wrapper>
          <DataCard
            textCard="Produtos que entraram"
            data={3027}
            loadingData={false}
          />
        </Wrapper>,
      );

      expect(getByTestId('iconChart')).toBeTruthy();
      expect(getByText('3027')).toBeTruthy();
      expect(getByText('Produtos que entraram')).toBeTruthy();
    });
    it('render component with state loading', () => {
      const {getByTestId} = render(
        <Wrapper>
          <DataCard
            textCard="Produtos que entraram"
            data={3027}
            loadingData={true}
          />
        </Wrapper>,
      );

      expect(getByTestId('skeletonTest')).toBeTruthy();
    });
  });
});
