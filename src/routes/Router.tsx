import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//*screens
import {Login} from '../screens/public/Login';
import {Register} from '../screens/public/Register';
import {InitialScreen} from '../screens/public/InitialScreen';
//*icons
import IconIonicon from 'react-native-vector-icons/Ionicons';
import {Private} from './Private.route';

IconIonicon.loadFont();

const Stack = createNativeStackNavigator();
export function Router() {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="private"
          component={Private}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
