import React, {useState} from 'react';
import {SigninDTO} from '../../models/Auth';
import {Input} from '../Input';
import {Wrapper} from './Wrapper';

export function Login() {
  const [dataSignin, setDataSignin] = useState({} as SigninDTO);

  const onSubmit = async () => {
    console.log(dataSignin);
  };

  const handleChange = (name: keyof SigninDTO) => {
    return (value: string) => {
      setDataSignin(prev => ({...prev, [name]: value}));
    };
  };

  return (
    <Wrapper onSubmit={onSubmit} title="Entrar">
      <Input
        title="Email"
        value={dataSignin.email}
        testID="inputEmail"
        onChangeText={handleChange('email')}
      />
      <Input
        title="Senha"
        value={dataSignin.password}
        testID="inputPassword"
        onChangeText={handleChange('password')}
      />
    </Wrapper>
  );
}
