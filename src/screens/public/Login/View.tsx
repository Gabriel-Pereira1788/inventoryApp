import React from 'react';
import {Box, ScrollView} from 'native-base';
import Form from '../../../components/Form';
import Background from './components/Background';

export function Login() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      backgroundColor="#F7F9FB"
      flex={1}
      testID="container"
      top={0}
      position="relative">
      <ScrollView
        w="100%"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <Background />
        <Box mt={'30%'}>
          <Form.Login />
        </Box>
      </ScrollView>
    </Box>
  );
}
