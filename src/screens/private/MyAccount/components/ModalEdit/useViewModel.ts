import auth from '@react-native-firebase/auth';
import {useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {usePicker} from '../../../../../hooks/usePicker';
import {User} from '../../../../../models/Auth';
import {useUser} from '../../../../../store/useUser';
import firebaseStorage from '@react-native-firebase/storage';
import {Platform} from 'react-native';

export function useEditUser() {
  const user = useUser();
  const queryClient = useQueryClient();
  const [dataUser, setDataUser] = useState(user as User);
  const {getImageLibrary} = usePicker();

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

  async function setImage() {
    const file = await getImageLibrary();
    if (file) {
      const filename = file.substring(file.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? file.replace('file://', '') : file;

      const refStorage = firebaseStorage().ref('images/');
      const response = await fetch(uploadUri);
      const blob = await response.blob();
      const uploadTask = refStorage.child(filename).put(blob);

      uploadTask.on(
        'state_changed',
        () => {},
        error => {
          console.log(error);
        },
        async () => {
          const url = await uploadTask.snapshot!.ref.getDownloadURL();
          console.log(url);
        },
      );
    }
  }

  return {dataUser, handleChangeData, onSubmit, getImageLibrary, setImage};
}
