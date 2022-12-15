import React, {useState} from 'react';
import {useAuth} from '../../hooks/useAuth';
import {RegisterDTO} from '../../models/Auth';
// import auth from '../../services/modules/auth/auth';
import {Input} from '../Input';
import {Wrapper} from './Wrapper';

export function Register() {
  const [dataRegister, setDataRegister] = useState({
    email: 'teste',
  } as RegisterDTO);
  const {createUser} = useAuth();
  const onSubmit = async () => {
    await createUser(dataRegister);
  };

  const handleChange = (name: keyof RegisterDTO) => {
    return (value: string) => {
      setDataRegister(prev => ({...prev, [name]: value}));
    };
  };
  return (
    <Wrapper onSubmit={onSubmit} title="Faça Parte">
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
