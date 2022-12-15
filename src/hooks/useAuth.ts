import {RegisterDTO, SigninDTO} from '../models/Auth';
import auth from '@react-native-firebase/auth';

export function useAuth() {
  async function signin(dataSubmit: SigninDTO) {
    const {signInWithEmailAndPassword} = auth();
    try {
      const data = await signInWithEmailAndPassword(
        dataSubmit.email,
        dataSubmit.password,
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function createUser(dataSubmit: RegisterDTO) {
    console.log(dataSubmit);
    auth()
      .createUserWithEmailAndPassword(dataSubmit.email, dataSubmit.password)
      .then(userData => console.log(userData))
      .catch(err => console.log(err));
  }

  return {signin, createUser};
}
