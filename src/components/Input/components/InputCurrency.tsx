import React from 'react';
import CurrencyInput, {CurrencyInputProps} from 'react-native-currency-input';
import {Input} from '../View';

interface CurrencyProps extends CurrencyInputProps {
  error?: boolean;
  errorMessage?: string;
  title: string;
}

export function InputCurrency({
  error,
  errorMessage,
  title,
  ...rest
}: CurrencyProps) {
  return (
    <CurrencyInput
      {...rest}
      prefix="R$"
      renderTextInput={props => (
        <Input
          {...props}
          title={title}
          error={error}
          errorMessage={errorMessage}
          my={2}
        />
      )}
      style={{
        borderRadius: 10,
        padding: 10,
        borderWidth: error ? 2 : 1,
        borderColor: error ? '#f15353af' : '#0000001b',
        backgroundColor: '#fff',
      }}
    />
  );
}
