import React from 'react';
//* Hooks
import {useRegister} from '../hooks/useRegister';
//*components
import {Input} from '../../Input';
import {Wrapper} from '../Wrapper';

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
      <Input
        type="password"
        title="Senha"
        error={!!errors.password}
        errorMessage={errors.password}
        value={dataRegister.password}
        onChangeText={handleChange('password')}
        testID="inputPassword"
      />
      <Input
        type="password"
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
