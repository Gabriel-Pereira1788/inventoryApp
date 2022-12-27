import {useState} from 'react';
import {User} from '../../../../models/Auth';
import {useUser} from '../../../../store/useUser';
export function useEditUser() {
  const user = useUser();
  const [dataUser, setDataUser] = useState(user as User);

  function handleChangeData(name: keyof User) {
    return (value: string) => {
      setDataUser(prev => ({...prev, [name]: value}));
    };
  }

  async function onSubmit() {
    console.log(dataUser);
  }

  return {dataUser, handleChangeData, onSubmit};
}
