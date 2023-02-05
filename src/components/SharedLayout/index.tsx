import {Box} from 'native-base';
import React from 'react';

import BottomTabs from '../BottomTabs/View';
import {RenderIF} from '../RenderIF/View';
import {SharedLayoutProps} from './sharedlayout.model';

export function SharedLayout({children, currentPath}: SharedLayoutProps) {
  return (
    <>
      <Box
        flex={1}
        _light={{backgroundColor: 'backgroundLight'}}
        _dark={{backgroundColor: 'backgroundDark'}}
        alignItems="center"
        justifyContent="center"
        py={3}>
        {children}
      </Box>
      <RenderIF condition={currentPath !== 'products'}>
        <BottomTabs currentPath={currentPath} />
      </RenderIF>
    </>
  );
}
