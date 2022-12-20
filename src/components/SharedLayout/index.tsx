import {Box, IBoxProps} from 'native-base';
import React, {ReactNode} from 'react';

interface Props extends IBoxProps {
  children: ReactNode;
}

export function SharedLayout({children}: Props) {
  return (
    <Box
      flex={1}
      _light={{backgroundColor: 'backgroundLight'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      alignItems="center"
      justifyContent="center"
      p={3}>
      {children}
    </Box>
  );
}
