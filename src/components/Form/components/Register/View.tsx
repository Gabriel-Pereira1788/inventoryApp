import React from 'react';
//* Hooks

//*components
import {Input} from '../../../Input/View';
import {Wrapper} from '../../Wrapper';
import {InputPassword} from '../../../Input/components/InputPassword';
import {useRegister} from './useViewModel';

export function Register() {
  const {dataRegister, handleChange, onSubmit, loading, errors} = useRegister();

  return (
    <Wrapper onSubmit={onSubmit} loading={loading} isRegister>
      <Input
        title="Nome"
        value={dataRegister.name}
        error={!!errors.name}
        errorMessage={errors.name}
        onChangeText={value => handleChange('name', value)}
        testID="inputName"
      />
      <Input
        title="Email"
        error={!!errors.email}
        errorMessage={errors.email}
        value={dataRegister.email}
        onChangeText={value => handleChange('email', value)}
        testID="inputEmail"
      />
      <InputPassword
        title="Senha"
        error={!!errors.password}
        errorMessage={errors.password}
        value={dataRegister.password}
        onChangeText={value => handleChange('password', value)}
        testID="inputPassword"
      />
      <InputPassword
        title="Confirmar senha"
        error={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword}
        value={dataRegister.confirmPassword}
        onChangeText={value => handleChange('confirmPassword', value)}
        testID="inputConfirmPassword"
      />
    </Wrapper>
  );
}
