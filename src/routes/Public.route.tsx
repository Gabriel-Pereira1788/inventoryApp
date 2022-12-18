import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InitialScreen} from '../screens/public/InitialScreen';
import {Login} from '../screens/public/Login';
import {Register} from '../screens/public/Register';

const Stack = createNativeStackNavigator();

export function Public() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="initial"
        component={InitialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
