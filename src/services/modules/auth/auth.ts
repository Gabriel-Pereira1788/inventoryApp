import auth from '@react-native-firebase/auth';
import {RegisterDTO, SigninDTO} from '../../../models/Auth';

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
  const {createUserWithEmailAndPassword} = auth();
  console.log(dataSubmit);
  try {
    const data = await createUserWithEmailAndPassword(
      dataSubmit.email,
      dataSubmit.password,
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default {
  signin,
  createUser,
};
