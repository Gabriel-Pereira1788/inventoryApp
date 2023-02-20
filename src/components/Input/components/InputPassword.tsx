import React, {useState} from 'react';
import {Input, Props} from '../View';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

export function InputPassword(props: Props) {
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
