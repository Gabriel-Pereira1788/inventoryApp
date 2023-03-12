<<<<<<< HEAD
import {Box} from 'native-base';
import React from 'react';

import BottomTabs from '../BottomTabs/View';
import {RenderIF} from '../RenderIF/View';
import {SharedLayoutProps} from './sharedlayout.model';

export function SharedLayout({children, currentPath}: SharedLayoutProps) {
=======
import {Box, IBoxProps} from 'native-base';
import React, {ReactNode} from 'react';
import {Paths} from '../../hooks/useBottomTabs';

import BottomTabs from '../BottomTabs/View';
import {RenderIF} from '../RenderIF/View';

export interface SharedLayoutProps extends IBoxProps {
  children: ReactNode;
  currentPath?: Paths;
}

export function SharedLayout({
  children,
  currentPath,
  ...rest
}: SharedLayoutProps) {
>>>>>>> development
  return (
    <>
      <Box
        flex={1}
        backgroundColor="backgroundLight"
        alignItems="center"
        justifyContent="center"
        py={3}
        {...rest}>
        {children}
      </Box>
      <RenderIF condition={currentPath !== 'products'}>
        <BottomTabs currentPath={currentPath} />
        {/* <BottomExample /> */}
      </RenderIF>
    </>
  );
}
