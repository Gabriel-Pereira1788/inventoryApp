import React from 'react';
import * as S from 'native-base';
//* components

import {Input} from '../Input/View';
import {InputCurrency} from '../Input/components/InputCurrency';
import {Select} from '../Select/View';
import {Button} from '../Button/View';

//* hooks
import {useFormProduct} from './useViewModel';
//*constants
import {categories} from '../../constants/categories';
import {ProductDTO} from '../../models/Product';

export interface FormProductProps extends S.IStackProps {
  onSubmit: (data: ProductDTO) => Promise<void>;
  loadingSubmit: boolean;
}

export function Form({onSubmit, loadingSubmit, ...rest}: FormProductProps) {
  const {productDTO, errors, handleChange, handleChangeCurrency, handleSubmit} =
    useFormProduct({onSubmit});
  return (
    <S.VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="full"
      {...rest}>
      <Input
        title="Nome do produto"
        w="full"
        my={2}
        error={!!errors.name_product}
        errorMessage={errors.name_product}
        value={productDTO.name_product}
        onChangeText={handleChange('name_product')}
      />
      <InputCurrency
        title="Preço de venda"
        error={!!errors.price_saled}
        errorMessage={errors.price_saled}
        value={Number(productDTO.price_saled)}
        onChangeValue={handleChangeCurrency('price_saled')}
      />
      <InputCurrency
        title="Preço de compra"
        error={!!errors.price_purchased}
        errorMessage={errors.price_purchased}
        value={Number(productDTO.price_purchased)}
        onChangeValue={handleChangeCurrency('price_purchased')}
      />

      <Input
        title="Estoque inicial"
        my={2}
        error={!!errors.storage}
        errorMessage={errors.storage}
        value={productDTO.storage}
        onChangeText={handleChange('storage')}
      />
      <Select
        title="Categoria"
        placeholder="Selecione a categoria"
        error={!!errors.category}
        errorMessage={errors.category}
        selectedValue={productDTO.category}
        onValueChange={handleChange('category')}
        items={categories}
      />
      <Button my={10} onPress={handleSubmit} loading={loadingSubmit}>
        Confirmar
      </Button>
    </S.VStack>
  );
}
