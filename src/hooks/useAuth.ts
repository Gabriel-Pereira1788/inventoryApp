import {RegisterDTO, SigninDTO, User} from '../models/Auth';
import auth from '@react-native-firebase/auth';
import {useQueryClient} from '@tanstack/react-query/build/lib/QueryClientProvider';
import {useNavigation} from '@react-navigation/native';
import {formatUser} from '../utils/formatUser';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAuth() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  async function signIn(dataSubmit: SigninDTO) {
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(dataSubmit.email.trim(), dataSubmit.password)
      .then(async userCredentials => {
        if (userCredentials.user) {
          const dataUser = formatUser(userCredentials.user);
          queryClient.invalidateQueries(['user']);
          queryClient.setQueryData<User>(['user'], dataUser);

          await AsyncStorage.setItem('@user', JSON.stringify(dataUser));
          queryClient.refetchQueries(['user']);
          navigation.navigate('dashboard');
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }

  async function createUser(dataSubmit: RegisterDTO) {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(dataSubmit.email, dataSubmit.password)
      .then(userCredentials => {
        userCredentials.user.updateProfile({
          displayName: dataSubmit.name,
        });

        queryClient.setQueryData<User>(
          ['user'],
          formatUser({...userCredentials.user, displayName: dataSubmit.name}),
        );

        navigation.navigate('dashboard');
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  async function signOut() {
    setLoading(true);
    auth()
      .signOut()
      .finally(() => setLoading(false));

    queryClient.removeQueries(['user']);
    await AsyncStorage.removeItem('@user');
    navigation.navigate('initialScreen');
  }

  return {signIn, createUser, signOut, loading};
}
