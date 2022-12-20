import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
//*components
import {Card} from '../components/Card';
//*hooks
import {withRequireAuth} from '../hooks/withRequireAuth';
//*screens
import {Dashboard} from '../screens/private/Dashboard';
//*icons
import IconIonicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Products} from '../screens/private/Products';

IconIonicon.loadFont();

const Tabs = createBottomTabNavigator();
export function Private() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: {minHeight: 60},
        tabBarActiveTintColor: '#FFF3AA',
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="dashboard"
        component={withRequireAuth(Dashboard)}
        options={{
          headerTransparent: true,
          headerTitle: '',

          headerLeft: ({tintColor}) => (
            <Card p={3} m="2">
              <IconIonicon name="notifications" size={20} color={tintColor} />
            </Card>
          ),
          tabBarIcon: ({color}) => (
            <MaterialIcon name="pie-chart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        component={withRequireAuth(Products)}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStyle: {padding: 15},
          headerLeft: () => (
            <Card p={3}>
              <IconIonicon name="notifications" size={20} color="#000" />
            </Card>
          ),
          tabBarIcon: ({color}) => (
            <MaterialIcon name="inventory" size={20} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
