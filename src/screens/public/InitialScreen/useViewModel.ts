import {useEffect} from 'react';

import {useUser} from '../../../store/useUser';
import {NavigationProps} from '../../../routes/navigation';

type UseInitialProps = Pick<NavigationProps<'initialScreen'>, 'navigation'>;

export function useInitial({navigation}: UseInitialProps) {
  const user = useUser();

  function redirectScreen() {
    navigation.navigate('login');
  }

  useEffect(() => {
    if (user) {
      navigation.replace('dashboard');
    }
  }, [user, navigation]);

  return {user, redirectScreen};

  // useEffect(() => {
  //   auth().onAuthStateChanged(async userCredentials => {
  //     if (userCredentials) {
  //       const dataUser = formatUser(userCredentials);
  //       queryClient.setQueryData(['user'], dataUser);
  //       await AsyncStorage.setItem('@user', JSON.stringify(dataUser));
  //       setTimeout(() => {
  //         // navigation.navigate('dashboard');
  //       }, 2000);
  //     } else {
  //       queryClient.removeQueries(['user']);
  //       await AsyncStorage.removeItem('@user');
  //       setTimeout(() => {
  //         // navigation.navigate('login');
  //       }, 2000);
  //     }
  //   });
  // }, [navigation, queryClient]);
}
