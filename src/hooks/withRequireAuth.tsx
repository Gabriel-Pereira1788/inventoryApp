import React, {ComponentType, useEffect, useState} from 'react';
//*hooks
import {useNavigation} from '@react-navigation/native';
import {useQueryClient} from '@tanstack/react-query/build/lib/QueryClientProvider';
//*models
import {User} from '../models/Auth';
//*components
import {Center} from 'native-base';
import {Loading} from '../components/Loading';

export function withRequireAuth<T extends Object>(Component: ComponentType<T>) {
  return function WithRequireAuth(props: T) {
    const queryClient = useQueryClient();
    const navigation = useNavigation();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const userQuery: User | undefined = queryClient.getQueryData(['user']);

      if (!userQuery) {
        navigation.navigate('login');
      } else {
        setUser(userQuery);
      }
    }, [queryClient, navigation]);

    if (user) {
      return <Component {...props} user={user} />;
    }

    return (
      <Center
        flex={1}
        _light={{backgroundColor: 'backgroundLight'}}
        _dark={{backgroundColor: 'backgroundDark'}}>
        <Loading />
      </Center>
    );
  };
}
