/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Messaging} from './src/services/modules/Messaging/Messaging';

Messaging.listenRemoteNotification();

AppRegistry.registerComponent(appName, () => App);
