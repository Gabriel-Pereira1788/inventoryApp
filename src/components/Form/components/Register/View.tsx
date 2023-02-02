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
        onChangeText={handleChange('name')}
        testID="inputName"
      />
      <Input
        title="Email"
        error={!!errors.email}
        errorMessage={errors.email}
        value={dataRegister.email}
        onChangeText={handleChange('email')}
        testID="inputEmail"
      />
      <InputPassword
        title="Senha"
        error={!!errors.password}
        errorMessage={errors.password}
        value={dataRegister.password}
        onChangeText={handleChange('password')}
        testID="inputPassword"
      />
      <InputPassword
        title="Confirmar senha"
        error={!!errors.confirmPassword}
        errorMessage={errors.confirmPassword}
        value={dataRegister.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        testID="inputConfirmPassword"
      />
    </Wrapper>
  );
}
