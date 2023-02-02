import auth from '@react-native-firebase/auth';
import {useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {User} from '../../../../../models/Auth';
import {useUser} from '../../../../../store/useUser';

export function useEditUser() {
  const user = useUser();
  const queryClient = useQueryClient();
  const [dataUser, setDataUser] = useState(user as User);

  function handleChangeData(name: keyof User) {
    return (value: string) => {
      setDataUser(prev => ({...prev, [name]: value}));
    };
  }

  async function onSubmit() {
    if (dataUser.name && dataUser.email) {
      auth()
        .currentUser?.updateEmail(dataUser.email)
        .then(() => {
          queryClient.setQueriesData(['user'], {
            ...user,
            email: dataUser.email,
          });
        })
        .catch(console.log);
      auth()
        .currentUser?.updateProfile({displayName: dataUser.name})
        .then(() => {
          queryClient.setQueriesData(['user'], {
            ...user,
            name: dataUser.name,
          });
        })
        .catch(console.log);

      queryClient.invalidateQueries(['user']);
    }
  }

  return {dataUser, handleChangeData, onSubmit};
}
