import React from 'react';
import {Box, ScrollView} from 'native-base';
import Form from '../../../components/Form';
import {ToggleTheme} from '../../../components/ToggleTheme';

export function Register() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      _light={{backgroundColor: 'backgroundLight'}}
      _dark={{backgroundColor: 'backgroundDark'}}
      p={3}
      flex={1}
      testID="container"
      position="relative">
      <Box position="absolute" top={5} right={5} zIndex={1}>
        <ToggleTheme testID="toggleMode" />
      </Box>
      <ScrollView
        w="100%"
        p={5}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <Form.Register />
      </ScrollView>
    </Box>
  );
}
