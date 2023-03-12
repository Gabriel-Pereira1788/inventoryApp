import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//*screens
import {Login} from '../screens/public/Login/View';
import {Register} from '../screens/public/Register/View';
import {InitialScreen} from '../screens/public/InitialScreen/View';
import MyAccount from '../screens/private/MyAccount/View';
import {Products} from '../screens/private/Products/View';
import {Dashboard} from '../screens/private/Dashboard/View';
//*icons
import IconIonicon from 'react-native-vector-icons/Ionicons';
<<<<<<< HEAD
import {withRequireAuth} from '../hooks/withRequireAuth';
import UserCard from '../components/UserCard/View';
import {useColorMode} from 'native-base';
import ManageProduct from '../screens/private/ManageProduct/View';
=======
import UserCard from '../components/UserCard/View';
import {useColorMode} from 'native-base';
import ManageProduct from '../screens/private/ManageProduct/View';
import {RootParamListI} from './navigation';
import ChatBot from '../screens/private/ChatBot/View';
>>>>>>> development

IconIonicon.loadFont();

const Stack = createNativeStackNavigator<RootParamListI>();
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
          name="initialScreen"
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
          component={Dashboard}
          options={{
            headerTransparent: true,
            headerTitle: 'Painel de controle',

            headerLeft: () => <></>,
            headerRight: () => <UserCard />,
          }}
        />
        <Stack.Screen
          name="myAccount"
          component={MyAccount}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="products"
          component={Products}
          options={{
            headerTransparent: true,
            headerTitle: 'Produtos',
            headerLeft: () => <></>,
            headerRight: () => <UserCard />,
          }}
        />

        <Stack.Screen
          name="manageProduct"
<<<<<<< HEAD
          component={withRequireAuth(ManageProduct)}
          options={{
            headerTransparent: true,
=======
          component={ManageProduct}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="chatBot"
          component={ChatBot}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerTitleAlign: 'center',
            headerLeft: () => <></>,
>>>>>>> development
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
