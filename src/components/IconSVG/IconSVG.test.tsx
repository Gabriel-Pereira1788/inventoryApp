import React from 'react';
import {render} from '@testing-library/react-native';

import {IconSVG} from './View';
import {Wrapper} from '../JestWrapper';
import IconBot from '../../assets/images/botI.svg';

const mockProps = {
  Icon: IconBot,
  size: 'sm' as 'sm' | 'xs' | 'xs2' | 'md' | 'lg',
  color: '#000',
  fill: true,
  testID: 'icon-svg',
};

describe('IconSVG', () => {
  it('renders the icon with the correct props', () => {
    const {getByTestId} = render(
      <Wrapper>
        <IconSVG {...mockProps} />
      </Wrapper>,
    );
    const svg = getByTestId('icon-svg');
    expect(svg.props.width).toBe(25);
    expect(svg.props.height).toBe(25);
    expect(svg.props.fill).toBe('#000');
  });
});
