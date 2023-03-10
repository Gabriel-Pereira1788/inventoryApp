import React from 'react';
//*hooks
import {useLogin} from './useViewModel';
//*components
import {Input} from '../../../Input/View';
import {Wrapper} from '../../Wrapper';
import {InputPassword} from '../../../Input/components/InputPassword';

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
        onChangeText={value => handleChange('email', value)}
      />
      <InputPassword
        title="Senha"
        error={!!errors.password}
        errorMessage={errors.password}
        value={dataSignin.password}
        testID="inputPassword"
        onChangeText={value => handleChange('password', value)}
      />
    </Wrapper>
  );
}
