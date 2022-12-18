import React from 'react';

import {Box, HStack, Text, VStack} from 'native-base';
import {User} from '../../../models/Auth';
import {Button} from '../../../components/Button';
import {useAuth} from '../../../hooks/useAuth';
import {DataCard} from '../../../components/DataCard';

interface Props {
  user?: User;
}

export function Dashboard({user}: Props) {
  const {signOut, loading} = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  console.log(loading);

  return (
    <Box
      flex={1}
      _light={{backgroundColor: 'backgroundLight'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      alignItems="center"
      justifyContent="center"
      p={3}>
      <VStack w="100%">
        <HStack w="100%" alignItems="center" justifyContent="center" space="5">
          <DataCard />
          <DataCard />
        </HStack>
      </VStack>
    </Box>
  );
}
