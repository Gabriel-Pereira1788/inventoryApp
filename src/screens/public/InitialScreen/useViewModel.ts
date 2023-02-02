import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useBackgroundAct} from '../../../hooks/useBackgroundAct';
import {formatUser} from '../../../utils/formatUser';
import auth from '@react-native-firebase/auth';

export function useInitial() {
  useBackgroundAct();
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  useEffect(() => {
    auth().onAuthStateChanged(userCredentials => {
      if (userCredentials) {
        queryClient.setQueryData(['user'], formatUser(userCredentials));
        setTimeout(() => {
          navigation.navigate('dashboard');
        }, 2000);
      } else {
        queryClient.removeQueries(['user']);
        setTimeout(() => {
          navigation.navigate('login');
        }, 2000);
      }
    });
  }, [navigation, queryClient]);
}
