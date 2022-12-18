import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Dashboard} from '../screens/private/Dashboard';

const Stack = createNativeStackNavigator();
export function Private() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
