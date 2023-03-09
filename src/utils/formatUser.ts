import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {User} from '../models/Auth';

export function formatUser(user: FirebaseAuthTypes.User): User {
  return {
    uid: user.uid,
    name: user.displayName!,
    email: user.email!,
    photoURL: user.photoURL,
    createdAt: new Date(user.metadata.creationTime!),
  };
}
