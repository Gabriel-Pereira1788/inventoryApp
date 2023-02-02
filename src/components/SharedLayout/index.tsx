import {Box} from 'native-base';
import React from 'react';

import BottomTabs from '../BottomTabs';
import BottomTabsProducts from '../BottomTabsProducts';
import {RenderIF} from '../RenderIF';
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
      <RenderIF
        condition={currentPath === 'products'}
        RenderComponent={() => <BottomTabs currentPath={currentPath} />}>
        <BottomTabsProducts currentPath={currentPath} />
      </RenderIF>
    </>
  );
}
