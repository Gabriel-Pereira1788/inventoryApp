import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//*screens
import {Login} from '../screens/public/Login';
import {Register} from '../screens/public/Register';
import {InitialScreen} from '../screens/public/InitialScreen';
//*icons
import IconIonicon from 'react-native-vector-icons/Ionicons';
import {Dashboard} from '../screens/private/Dashboard';
import {withRequireAuth} from '../hooks/withRequireAuth';
import {Card} from '../components/Card';
import UserCard from '../components/UserCard';
import MyAccount from '../screens/private/MyAccount';
import {Products} from '../screens/private/Products';
import {useColorMode} from 'native-base';

IconIonicon.loadFont();

const Stack = createNativeStackNavigator();
export function Router() {
  const {colorMode} = useColorMode();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 23,
            color: colorMode === 'light' ? '#000' : '#fff',
          },
        }}>
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
          name="dashboard"
          component={withRequireAuth(Dashboard)}
          options={{
            headerTransparent: true,
            headerTitle: 'Painel de controle',

            headerLeft: () => <></>,
            headerRight: () => <UserCard />,
          }}
        />
        <Stack.Screen
          name="myAccount"
          component={withRequireAuth(MyAccount)}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="products"
          component={withRequireAuth(Products)}
          options={{
            headerTransparent: true,
            headerTitle: '',

            headerLeft: ({tintColor}) => (
              <Card p={3} my="2" mx="1">
                <IconIonicon name="notifications" size={20} color={tintColor} />
              </Card>
            ),
            headerRight: () => <UserCard />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
