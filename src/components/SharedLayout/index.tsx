import {Box, IBoxProps} from 'native-base';
import React, {ReactNode} from 'react';
import {Paths} from '../../hooks/useBottomTabs';
import BottomTabs from '../BottomTabs';
import BottomTabsProducts from '../BottomTabsProducts';
import {RenderIF} from '../RenderIF';

interface Props extends IBoxProps {
  children: ReactNode;
  currentPath?: Paths;
}

export function SharedLayout({children, currentPath}: Props) {
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
