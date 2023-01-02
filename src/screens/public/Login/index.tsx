import React from 'react';
import {Box, ScrollView} from 'native-base';
import Form from '../../../components/Form';
import {ToggleTheme} from '../../../components/ToggleTheme';

export function Login() {
  return (
    <Box
      alignItems="center"
      _light={{backgroundColor: '#FCF5DE'}}
      _dark={{backgroundColor: 'backgroundDark'}}
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
        <Form.Login />
      </ScrollView>
    </Box>
  );
}
