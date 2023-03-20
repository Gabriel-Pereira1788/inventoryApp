import React from 'react';
import {Box, ScrollView} from 'native-base';
import Form from '../../../components/Form';
import Background from './components/Background';

export function Register() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      backgroundColor="#F7F9FB"
      flex={1}
      testID="container"
      position="relative">
      <ScrollView
        w="100%"
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <Background />
        <Box mt={'25%'}>
          <Form.Register />
        </Box>
      </ScrollView>
    </Box>
  );
}
