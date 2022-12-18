import React, {useState} from 'react';
//*hooks
import {useAuth} from '../../hooks/useAuth';
//*models
import {RegisterDTO} from '../../models/Auth';
//*components
import {Input} from '../Input';
import {Wrapper} from './Wrapper';

export function Register() {
  const [dataRegister, setDataRegister] = useState({
    email: 'teste',
  } as RegisterDTO);

  const {createUser, loading} = useAuth();

  const onSubmit = async () => {
    await createUser(dataRegister);
  };

  const handleChange = (name: keyof RegisterDTO) => {
    return (value: string) => {
      setDataRegister(prev => ({...prev, [name]: value}));
    };
  };
  return (
    <Wrapper onSubmit={onSubmit} loading={loading} title="Faça Parte">
      <Input
        title="Nome"
        value={dataRegister.name}
        onChangeText={handleChange('name')}
        testID="inputName"
      />
      <Input
        title="Email"
        value={dataRegister.email}
        onChangeText={handleChange('email')}
        testID="inputEmail"
      />
      <Input
        title="Senha"
        value={dataRegister.password}
        onChangeText={handleChange('password')}
        testID="inputPassword"
      />
      <Input
        title="Confirmar senha"
        value={dataRegister.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        testID="inputConfirmPassword"
      />
    </Wrapper>
  );
}
