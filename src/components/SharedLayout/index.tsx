import {Box, IBoxProps} from 'native-base';
import React, {ReactNode} from 'react';
import {Paths} from '../../hooks/useBottomTabs';

import BottomTabs from '../BottomTabs/View';

export interface SharedLayoutProps extends IBoxProps {
  children: ReactNode;
  currentPath?: Paths;
}

export function SharedLayout({
  children,
  currentPath,
  ...rest
}: SharedLayoutProps) {
  return (
    <>
      <Box
        flex={1}
        backgroundColor="#F7F9FB"
        alignItems="center"
        justifyContent="center"
        py={3}
        {...rest}>
        {children}
      </Box>

      <BottomTabs currentPath={currentPath} />
      {/* <BottomExample /> */}
    </>
  );
}
