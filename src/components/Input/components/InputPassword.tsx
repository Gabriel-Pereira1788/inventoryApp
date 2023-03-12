import React, {useState} from 'react';
<<<<<<< HEAD
import {Input, Props} from '../View';
=======
import {Input, InputProps} from '../View';
>>>>>>> development
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

export function InputPassword(props: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      InputRightElement={
        <Ionicons
          name={isVisible ? 'eye' : 'eye-off'}
          size={25}
          color="#00000080"
          style={{marginRight: 15}}
          onPress={toggleVisible}
        />
      }
    />
  );
}
