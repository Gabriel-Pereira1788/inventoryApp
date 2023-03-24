import firebaseStorage from '@react-native-firebase/storage';

export function useStorageFirebase() {
  async function setDataStorage(uploadUri: string, filename: string) {
    let url: string = '';

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
        url = await uploadTask.snapshot!.ref.getDownloadURL();

        console.log(url);
      },
    );

    return url;
  }

  return {setDataStorage};
}
