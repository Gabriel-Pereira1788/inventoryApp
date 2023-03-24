import {launchImageLibrary} from 'react-native-image-picker';

export function usePicker() {
  async function getImageLibrary() {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
      quality: 0.9,
    });
    console.log(result);

    return result.assets ? result.assets[0].uri : null;
  }

  return {getImageLibrary};
}
