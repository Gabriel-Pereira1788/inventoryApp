import React from 'react';
import * as S from 'native-base';
import {NumericFormat} from 'react-number-format';

interface CurrencyProps extends S.ITextProps {
  value: number;
}

export function CurrencyFormat({value, ...rest}: CurrencyProps) {
  return (
    <NumericFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      renderText={formatedValue => (
        <S.Text bold mt={10} ml={'2%'} fontSize="md" {...rest}>
          {formatedValue}
        </S.Text>
      )}
    />
  );
}
