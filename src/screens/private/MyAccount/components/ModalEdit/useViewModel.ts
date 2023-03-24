import auth from '@react-native-firebase/auth';
import {useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {usePicker} from '../../../../../hooks/usePicker';
import {User} from '../../../../../models/Auth';
import {useUser} from '../../../../../store/useUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useStorage} from '../../../../../hooks/useStorage';

export function useEditUser() {
  const user = useUser();
  const queryClient = useQueryClient();
  const [dataUser, setDataUser] = useState(user as User);
  const {getImageLibrary} = usePicker();
  const {setImage} = useStorage();

  function handleChangeData(name: keyof User) {
    return (value: string) => {
      setDataUser(prev => ({...prev, [name]: value}));
    };
  }

  async function onSubmit() {
    if (dataUser.name && dataUser.email) {
      auth()
        .currentUser?.updateEmail(dataUser.email)
        .then(async () => {
          const newData = {...user, email: dataUser.email};
          queryClient.setQueriesData(['user'], newData);

          await AsyncStorage.setItem('@user', JSON.stringify(newData));
        })
        .catch(console.log);

      setImage(dataUser.photoURL, url => {
        auth()
          .currentUser?.updateProfile({
            displayName: dataUser.name,
            photoURL: url,
          })
          .then(async () => {
            const newData = {
              ...user,
              name: dataUser.name,
              photoURL: url,
            };
            queryClient.setQueriesData(['user'], newData);
            await AsyncStorage.setItem('@user', JSON.stringify(newData));
          })
          .catch(console.log);
      });

      queryClient.invalidateQueries(['user']);
      queryClient.refetchQueries(['user']);
    }
  }

  async function handleSetImage() {
    const file = await getImageLibrary();
    if (file) {
      setDataUser(prev => ({...prev, photoURL: file}));
    }
  }

  return {
    dataUser,
    handleChangeData,
    onSubmit,
    getImageLibrary,
    handleSetImage,
  };
}
