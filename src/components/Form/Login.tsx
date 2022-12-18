import React, {useState} from 'react';
import {useAuth} from '../../hooks/useAuth';
import {SigninDTO} from '../../models/Auth';
import {Input} from '../Input';
import {Wrapper} from './Wrapper';

export function Login() {
  const [dataSignin, setDataSignin] = useState({} as SigninDTO);
  const {signIn, loading} = useAuth();

  const onSubmit = async () => {
    if (dataSignin) {
      await signIn(dataSignin);
    }
  };

  const handleChange = (name: keyof SigninDTO) => {
    return (value: string) => {
      setDataSignin(prev => ({...prev, [name]: value}));
    };
  };

  return (
    <Wrapper onSubmit={onSubmit} title="Entrar" loading={loading}>
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
