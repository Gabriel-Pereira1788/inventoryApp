import React from 'react';
//*hooks
import {useLogin} from '../hooks/useLogin';
//*components
import {Input} from '../../Input';
import {Wrapper} from '../Wrapper';

export function Login() {
  const {dataSignin, loading, errors, handleChange, onSubmit} = useLogin();
  return (
    <Wrapper onSubmit={onSubmit} loading={loading}>
      <Input
        title="Email"
        error={!!errors.email}
        errorMessage={errors.email}
        value={dataSignin.email}
        testID="inputEmail"
        onChangeText={handleChange('email')}
      />
      <Input
        type="password"
        title="Senha"
        error={!!errors.password}
        errorMessage={errors.password}
        value={dataSignin.password}
        testID="inputPassword"
        onChangeText={handleChange('password')}
      />
    </Wrapper>
  );
}
