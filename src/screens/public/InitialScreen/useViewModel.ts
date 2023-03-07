import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useBackgroundAct} from '../../../hooks/useBackgroundAct';
import {formatUser} from '../../../utils/formatUser';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useInitial() {
  useBackgroundAct();
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  useEffect(() => {
    auth().onAuthStateChanged(async userCredentials => {
      if (userCredentials) {
        const dataUser = formatUser(userCredentials);
        queryClient.setQueryData(['user'], dataUser);
        await AsyncStorage.setItem('@user', JSON.stringify(dataUser));
        setTimeout(() => {
          navigation.navigate('dashboard');
        }, 2000);
      } else {
        queryClient.removeQueries(['user']);
        await AsyncStorage.removeItem('@user');
        setTimeout(() => {
          navigation.navigate('login');
        }, 2000);
      }
    });
  }, [navigation, queryClient]);
}
